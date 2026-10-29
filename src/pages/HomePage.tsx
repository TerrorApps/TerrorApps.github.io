import React from "react"
import { Link } from "react-router-dom"
import StatCard from "components/StatCard"
import ContactForm from "components/ContactForm"

const TRACKED = [
  {
    title: "Singles and sealed",
    body: "A custom inventory system that tracks what sells, at what margin, and how fast.",
  },
  {
    title: "Events",
    body: "Tournaments and card shows correlated to sales, so you know which to run again.",
  },
  {
    title: "Employee hours",
    body: "Staffing against traffic and revenue, by day and by event.",
  },
  {
    title: "Cash flow and margin",
    body: "Card show profit, added profit margin, and what is left after the buylist.",
  },
]

const ENDPOINTS = [
  "cards/search",
  "cards/:id/prices",
  "cards/:id/skus",
  "cards/:id/sales",
  "cards/:id/live-price",
  "sets/:id/cards",
  "prices/movers",
  "images/:card_number",
  "signals/:game",
]

const API_STATS = [
  { value: "29", caption: "trading card games, including Pokémon, Magic, One Piece, Riftbound and Gundam", mint: true },
  { value: "Hourly", caption: "price refresh, with daily history back to 2023" },
  { value: "4", caption: "data tiers: metadata, market prices, per-condition SKUs, realized sales signals" },
  { value: "Free", caption: "tier with 1,000 requests a day; paid plans from $19/mo" },
]

const CASE_STUDY_TILES = [
  { value: "+80%", caption: "sales growth in one year", signal: true },
  { value: "5", caption: "data sources in one system" },
  { value: "12", caption: "months of plan, review, revise" },
]

const fade = (duration: number, delay: number) => ({ animationDuration: `${duration}s`, animationDelay: `${delay}s` })

// "Read the docs" and "Read the full study" have no destination yet; they render as placeholders, as in the design.
const HomePage: React.FC = () => {
  return (
    <>
      <section className="section split hero">
        <div className="stack hero__copy">
          <span className="eyebrow fade-up" style={fade(0.7, 0)}>
            Inventory intelligence for TCG stores
          </span>
          <h1 className="display fade-up" style={fade(0.8, 0.1)}>
            Data your store can act on.
          </h1>
          <p className="lede fade-up" style={fade(0.8, 0.22)}>
            We connect singles and sealed inventory to your events, staff hours and cash flow, then build a plan to grow
            sales and repeat it. Behind it sits Cardpool, our API and data lake of TCG prices, images and metadata.
          </p>
          <div className="hero__actions fade-up" style={fade(0.8, 0.34)}>
            <Link className="btn btn--primary" to="/#contact">
              Book a demo
            </Link>
            <Link className="btn btn--secondary" to="/#work">
              See the case study
            </Link>
          </div>
        </div>
        <StatCard />
      </section>

      <section id="data" className="section section--ruled stack" style={{ gap: 40 }}>
        <div className="stack" style={{ gap: 10, maxWidth: "60ch" }}>
          <span className="eyebrow">What we track</span>
          <h2 className="title">One view of everything that moves product.</h2>
        </div>
        <div className="grid-cards">
          {TRACKED.map(({ title, body }) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="api" className="api">
        <div className="api__inner">
          <div className="split api__top">
            <div className="stack api__copy">
              <span className="eyebrow">Cardpool · API &amp; data lake</span>
              <h2 className="title">Years of TCG market data, one API key away.</h2>
              <p className="lede">
                Card and set metadata, images, market prices, per-condition SKU pricing and realized sales signals
                across 29 trading card games. Served from the edge, refreshed hourly.
              </p>
              <div className="hero__actions">
                <Link className="btn btn--mint" to="/#contact">
                  Get an API key
                </Link>
                <a className="btn btn--outline-dark" href="#">
                  Read the docs
                </a>
              </div>
            </div>
            <div className="code">
              <div className="code__head">
                <span>GET /pokemon/cards/:id/prices</span>
                <span>200 · 41 ms</span>
              </div>
              <pre>
                {"{\n  "}
                <span className="code__key">&quot;name&quot;</span>
                {': "Charizard ex",\n  '}
                <span className="code__key">&quot;set&quot;</span>
                {': "Obsidian Flames",\n  '}
                <span className="code__key">&quot;image_url&quot;</span>
                {': "https://…/sv3-125.png",\n  '}
                <span className="code__key">&quot;market_price&quot;</span>
                {": 142.18,\n  "}
                <span className="code__key">&quot;skus&quot;</span>
                {": [\n    { "}
                <span className="code__key">&quot;condition&quot;</span>
                {': "NM", '}
                <span className="code__key">&quot;price&quot;</span>
                {": 142.18 },\n    { "}
                <span className="code__key">&quot;condition&quot;</span>
                {': "LP", '}
                <span className="code__key">&quot;price&quot;</span>
                {": 118.40 }\n  ],\n  "}
                <span className="code__key">&quot;history&quot;</span>
                {": {\n    "}
                <span className="code__key">&quot;points&quot;</span>
                {": 1096,\n    "}
                <span className="code__key">&quot;since&quot;</span>
                {': "2023-08-11"\n  }\n}'}
              </pre>
            </div>
          </div>

          <div className="api__stats">
            {API_STATS.map(({ value, caption, mint }) => (
              <div className="api__stat" key={value}>
                <strong className={mint ? "api__stat--mint" : undefined}>{value}</strong>
                <span>{caption}</span>
              </div>
            ))}
          </div>

          <ul className="endpoints">
            {ENDPOINTS.map(endpoint => (
              <li key={endpoint}>{endpoint}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className="work">
        <div className="section split work__inner">
          <div className="stack work__copy">
            <span className="eyebrow">Case study</span>
            <h2 className="title">A plan to increase sales, then increase them again.</h2>
            <p className="lede">
              We added a custom inventory system to a TCG store, tracked singles and sealed against events, employee
              hours, cash flow and card show profit, then built plans on top of the data and kept revising them.
            </p>
            <a className="link-strong" href="#">
              Read the full study →
            </a>
          </div>
          <div className="tiles">
            {CASE_STUDY_TILES.map(({ value, caption, signal }) => (
              <div className="tile" key={value}>
                <strong className={signal ? "tile__value--signal" : undefined}>{value}</strong>
                <span>{caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apps" className="section split apps">
        <div className="stack apps__copy">
          <span className="eyebrow">Apps</span>
          <h2 className="title">We also ship mobile apps.</h2>
          <p className="lede">
            iOS and Android, built by the same team that builds the data tooling. AI is part of how we work, from
            forecasting to the apps themselves.
          </p>
        </div>
        <div className="project">
          <div className="project__image">app screenshot</div>
          <div className="project__body">
            <div className="project__row">
              <h3>App name</h3>
              <span className="project__tag">iOS · Android</span>
            </div>
            <p>One-line description of the app.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section section--ruled split contact">
        <div className="stack contact__copy">
          <span className="eyebrow">Contact</span>
          <h2 className="title">Tell us about your store.</h2>
          <p className="lede">
            We&apos;ll look at what you sell, what you run, and where the data is today, then come back with a plan.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  )
}

export default HomePage
