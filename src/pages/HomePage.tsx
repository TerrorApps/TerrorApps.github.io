import React from "react"
import { Link } from "react-router-dom"
import StatCard from "components/StatCard"
import ContactForm from "components/ContactForm"

const SERVICES = [
  {
    title: "Mobile apps",
    body: "iOS and Android apps, designed and built end to end.",
  },
  {
    title: "SaaS products",
    body: "Software we build, run and sell ourselves, like Cardpool.",
  },
  {
    title: "Consulting",
    body: "Hands-on help for mid-size businesses: custom tools, data and planning.",
  },
  {
    title: "Trading card game stores",
    body:
      "A lot of our work. Inventory, events, staff hours and cash flow in one view, so a store knows what to run again.",
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
  {
    value: "5",
    caption: "games to start: One Piece, Pokémon, Magic, Riftbound and Gundam, with more on the way",
    mint: true,
  },
  { value: "4", caption: "data tiers: metadata, market prices, per-condition SKUs, realized sales signals" },
  { value: "Free", caption: "tier planned at 1,000 requests a day, with paid plans from $19/mo" },
  { value: "On request", caption: "API keys are issued by request during early access" },
]

const fade = (duration: number, delay: number) => ({ animationDuration: `${duration}s`, animationDelay: `${delay}s` })

const HomePage: React.FC = () => {
  return (
    <>
      <section className="section split hero">
        <div className="stack hero__copy">
          <span className="eyebrow fade-up" style={fade(0.7, 0)}>
            Mobile apps, SaaS and consulting
          </span>
          <h1 className="display fade-up" style={fade(0.8, 0.1)}>
            Software your business runs on.
          </h1>
          <p className="lede fade-up" style={fade(0.8, 0.22)}>
            Terror LLC builds mobile apps and SaaS products, and helps mid-size businesses plan, build and run custom
            software. A lot of our work is with trading card game stores. Cardpool, our API of TCG prices, images and
            metadata, is one of our products.
          </p>
          <div className="hero__actions fade-up" style={fade(0.8, 0.34)}>
            <Link className="btn btn--primary" to="/#contact">
              Get in touch
            </Link>
            <Link className="btn btn--secondary" to="/#api">
              Explore Cardpool
            </Link>
          </div>
        </div>
        <StatCard />
      </section>

      <section id="services" className="section section--ruled stack" style={{ gap: 40 }}>
        <div className="stack" style={{ gap: 10, maxWidth: "60ch" }}>
          <span className="eyebrow">What we do</span>
          <h2 className="title">Mobile apps, SaaS and consulting.</h2>
        </div>
        <div className="grid-cards">
          {SERVICES.map(({ title, body }) => (
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
              <h2 className="title">TCG market data, one API key away.</h2>
              <p className="lede">
                Card and set metadata, images, market prices, per-condition SKU pricing and realized sales signals for
                One Piece, Pokémon, Magic, Riftbound and Gundam, with more games on the way. Cardpool is in early
                access.
              </p>
              <div className="hero__actions">
                <Link className="btn btn--mint" to="/#contact">
                  Request an API key
                </Link>
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

          <p className="api__notice">This product uses TCGplayer data but is not endorsed or certified by TCGplayer.</p>

          <ul className="endpoints">
            {ENDPOINTS.map(endpoint => (
              <li key={endpoint}>{endpoint}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="section section--ruled split contact">
        <div className="stack contact__copy">
          <span className="eyebrow">Contact</span>
          <h2 className="title">Tell us what you need built.</h2>
          <p className="lede">
            Tell us what you run, what is slowing you down, and what you want built. We&apos;ll come back with a plan.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  )
}

export default HomePage
