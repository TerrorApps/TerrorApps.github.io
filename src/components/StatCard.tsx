import React, { useEffect, useState } from "react"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"

// The numbers here are illustrative sample data, simulated in the browser. There is no data source behind them.

const CHART_MAX = 4400
const TICK_MS = 2600
const TWEEN_MS = 40
const TWEEN_EASE = 0.12
// Entrance finishes at .5s + 13 groups * 50ms + .7s; after that bars switch from the keyframe to height transitions.
const ENTRANCE_MS = 2000

const FEED: [string, string][] = [
  ["Fri · Modern tournament", "+$2,140"],
  ["Sat · Card show booth", "+$3,860"],
  ["Buylist · 42 singles in", "-$1,120"],
  ["Sealed · 6 booster boxes", "+$780"],
  ["Sun · Commander night", "+$1,310"],
  ["Staff hours · this week", "142 h"],
  ["Restock · chase singles", "-$640"],
  ["Online · 18 orders", "+$920"],
]

interface Series {
  singles: number[]
  sealed: number[]
}

interface Shown {
  singles: number
  sealed: number
  delta: number
}

const INITIAL: Series = {
  singles: [1480, 1620, 1390, 2140, 3860, 1990, 1720, 1510, 1700, 1460, 2240, 3980, 2080, 1890],
  sealed: [980, 1040, 910, 1380, 2410, 1270, 1120, 1010, 1090, 960, 1450, 2560, 1360, 1240],
}

const sum = (values: number[]) => values.reduce((a, b) => a + b, 0)

// Last 7 days vs. the 7 before, as a rounded percent change in combined totals.
const totals = ({ singles, sealed }: Series): Shown => {
  const prev = sum(singles.slice(0, 7)) + sum(sealed.slice(0, 7))
  const now = sum(singles.slice(7)) + sum(sealed.slice(7))
  return { singles: sum(singles.slice(7)), sealed: sum(sealed.slice(7)), delta: Math.round((now / prev - 1) * 100) }
}

// Next day's value: the value 7 days back, scaled by 0.85–1.25, never below 600.
const next = (values: number[]) =>
  values.slice(1).concat(Math.max(600, Math.round(values[values.length - 7] * (0.85 + Math.random() * 0.4))))

const money = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`

const StatCard: React.FC = () => {
  const reduced = usePrefersReducedMotion()
  const [series, setSeries] = useState<Series>(INITIAL)
  const [shown, setShown] = useState<Shown>(() => (reduced ? totals(INITIAL) : { singles: 0, sealed: 0, delta: 0 }))
  const [feedIdx, setFeedIdx] = useState(0)
  const [entered, setEntered] = useState(reduced)
  const [clock, setClock] = useState(() => new Date().toTimeString().slice(0, 8))

  const target = totals(series)

  useEffect(() => {
    const id = setInterval(() => setClock(new Date().toTimeString().slice(0, 8)), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (reduced) return undefined
    const id = setInterval(() => {
      setSeries(s => ({ singles: next(s.singles), sealed: next(s.sealed) }))
      setFeedIdx(i => i + 1)
    }, TICK_MS)
    const entrance = setTimeout(() => setEntered(true), ENTRANCE_MS)
    return () => {
      clearInterval(id)
      clearTimeout(entrance)
    }
  }, [reduced])

  // Ease the displayed totals toward the target; stop re-rendering once they have settled.
  useEffect(() => {
    if (reduced) {
      setShown(target)
      return undefined
    }
    const id = setInterval(() => {
      setShown(prev => {
        const close = (a: number, b: number) => Math.abs(a - b) < 0.5
        if (
          close(prev.singles, target.singles) &&
          close(prev.sealed, target.sealed) &&
          close(prev.delta, target.delta)
        ) {
          return prev.singles === target.singles && prev.sealed === target.sealed && prev.delta === target.delta
            ? prev
            : target
        }
        return {
          singles: prev.singles + (target.singles - prev.singles) * TWEEN_EASE,
          sealed: prev.sealed + (target.sealed - prev.sealed) * TWEEN_EASE,
          delta: prev.delta + (target.delta - prev.delta) * TWEEN_EASE,
        }
      })
    }, TWEEN_MS)
    return () => clearInterval(id)
  }, [reduced, target.singles, target.sealed, target.delta])

  const delta = Math.round(shown.delta)
  const rows = [0, 1, 2, 3].map(j => FEED[(feedIdx + j) % FEED.length])

  return (
    <div className="live fade-up" style={{ animationDuration: ".9s", animationDelay: ".3s" }} aria-hidden="true">
      <div className="live__blob live__blob--accent" />
      <div className="live__blob live__blob--primary" />
      <div className="live__card">
        <div className="live__head">
          <span className="live__title">
            <span className="live__dot">
              <span />
              <span />
            </span>
            Singles vs. sealed · live
          </span>
          <span className="mono">{clock}</span>
        </div>

        <div className="live__stats">
          <div className="stat">
            <span className="stat__value mono">{money(shown.singles)}</span>
            <span className="stat__caption">singles</span>
          </div>
          <div className="stat">
            <span className="stat__value mono">{money(shown.sealed)}</span>
            <span className="stat__caption">sealed</span>
          </div>
          <div className="stat">
            <span className="stat__value stat__value--signal mono">{`${delta >= 0 ? "+" : ""}${delta}%`}</span>
            <span className="stat__caption">vs. last week</span>
          </div>
        </div>

        <div className="chart">
          <div className="chart__bars">
            {series.singles.map((singles, i) => (
              <div
                // Positions are fixed slots; the bars update in place, so the index is the identity.
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                className="chart__group"
                style={{ opacity: i === 13 ? 1 : 0.55 + i * 0.03 }}
              >
                <div
                  className={`chart__bar chart__bar--singles${entered ? "" : " chart__bar--enter"}`}
                  style={{
                    height: `${Math.min(100, (singles / CHART_MAX) * 100)}%`,
                    animationDelay: `${0.45 + i * 0.05}s`,
                  }}
                />
                <div
                  className={`chart__bar chart__bar--sealed${entered ? "" : " chart__bar--enter"}`}
                  style={{
                    height: `${Math.min(100, (series.sealed[i] / CHART_MAX) * 100)}%`,
                    animationDelay: `${0.5 + i * 0.05}s`,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="chart__axis">
            <span>14 days ago</span>
            <span>today</span>
          </div>
          <div className="chart__legend">
            <span>
              <i style={{ background: "var(--primary)" }} />
              singles
            </span>
            <span>
              <i style={{ background: "var(--accent)" }} />
              sealed
            </span>
          </div>
        </div>

        <div className="feed">
          {/* Re-keyed each tick so the one-row slide restarts. */}
          <div className="feed__rows" key={feedIdx}>
            {rows.map(([label, value]) => (
              <div className="feed__row" key={label}>
                <span className="feed__label">{label}</span>
                <span className={`mono${value.startsWith("-") ? " feed__value--out" : ""}`}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatCard
