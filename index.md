---
layout: default
title: Home
description: "Khajan Singh — Environmental Electrical Engineering ISM digital portfolio."
---

<section class="hero">
  <div class="hero__grid">
    <div class="hero__left">
      <div class="kicker">ISM Digital Portfolio</div>
      <h1 class="h1">Khajan Singh</h1>
      <p class="lede">
        Environmental Electrical Engineering — designing sensing systems that help us measure, model, and protect the living world.
      </p>

      <div class="hero__chips">
        <span class="chip">Grade 11 · Wakeland HS (Frisco, TX)</span>
        <span class="chip">Plant & Environmental Sensing</span>
        <span class="chip">IoT · Edge Systems · Data</span>
      </div>

      <div style="margin-top:18px; display:flex; gap:10px; flex-wrap:wrap;">
        <a class="btn btn--primary" href="{{ '/projects/' | relative_url }}">Explore Projects</a>
        <a class="btn" href="{{ '/research/' | relative_url }}">View Research</a>
        <a class="btn" href="https://www.linkedin.com/in/khajansingh09/" target="_blank" rel="noopener">LinkedIn</a>
      </div>

      <div style="margin-top:18px; padding-top:14px; border-top:1px solid rgba(255,255,255,0.12);">
        <div class="kicker">Quote</div>
        <p class="lede" style="margin-top:10px;">
          “The people who are crazy enough to think they can change the world are the ones who do.” — Steve Jobs
        </p>
      </div>
    </div>

    <div class="hero__right">
      <div class="hero__art">
        <div class="artcard" aria-label="Project-themed visual">
          <!-- Abstract: plant + signal + sensor nodes -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700" role="img" aria-label="Plant signal and sensor visualization">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="rgba(122,167,255,0.85)"/>
                <stop offset="1" stop-color="rgba(119,242,198,0.75)"/>
              </linearGradient>
              <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="12"/>
              </filter>
            </defs>

            <rect x="0" y="0" width="900" height="700" fill="transparent"/>

            <!-- soft glow orbs -->
            <circle cx="210" cy="210" r="130" fill="rgba(122,167,255,0.25)" filter="url(#blur)"/>
            <circle cx="640" cy="360" r="170" fill="rgba(119,242,198,0.18)" filter="url(#blur)"/>

            <!-- signal line -->
            <path d="M90 520 C 170 420, 250 610, 330 500 S 500 430, 580 520 S 740 590, 820 500"
                  fill="none" stroke="url(#g1)" stroke-width="6" stroke-linecap="round"/>

            <!-- sensor nodes -->
            <g fill="rgba(255,255,255,0.85)" opacity="0.9">
              <circle cx="140" cy="485" r="8"/>
              <circle cx="260" cy="560" r="8"/>
              <circle cx="390" cy="500" r="8"/>
              <circle cx="540" cy="470" r="8"/>
              <circle cx="700" cy="560" r="8"/>
              <circle cx="820" cy="500" r="8"/>
            </g>

            <!-- simple plant icon -->
            <g transform="translate(400 120)">
              <path d="M50 360c0-120 0-220 40-300" stroke="rgba(255,255,255,0.55)" stroke-width="10" stroke-linecap="round"/>
              <path d="M90 130c70 10 110 60 110 120c-70 10-130-20-160-70c-10-20-10-35-10-50c15 0 35 0 60 0z"
                    fill="rgba(119,242,198,0.35)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
              <path d="M60 210c-70 10-110 60-110 120c70 10 130-20 160-70c10-20 10-35 10-50c-15 0-35 0-60 0z"
                    fill="rgba(122,167,255,0.28)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
            </g>

            <!-- footer label -->
            <text x="40" y="660" fill="rgba(255,255,255,0.70)" font-family="ui-sans-serif, system-ui" font-size="22">
              Sensing • Signals • Systems → Environmental Insight
            </text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="grid">
  <div class="card">
    <h3 class="card__title">What I’m building</h3>
    <p class="card__text">
      A sensor-driven plant monitoring system that captures soil and environmental data and turns it into clean, interpretable dashboards
      — built for practical use by growers and researchers.
    </p>
    <div class="card__meta">
      <a class="btn" href="{{ '/projects/' | relative_url }}">Projects</a>
      <a class="btn" href="{{ '/research/' | relative_url }}">Assessments</a>
    </div>
  </div>

  <div class="card">
    <h3 class="card__title">How I work</h3>
    <p class="card__text">
      Sustained inquiry: define questions → build instrumentation → collect real data → iterate designs → reflect and improve documentation over time.
    </p>
    <div class="card__meta">
      <a class="btn" href="{{ '/about-ism/' | relative_url }}">About ISM</a>
      <a class="btn" href="{{ '/blog/' | relative_url }}">Weekly Blog</a>
    </div>
  </div>

  <div class="card">
    <h3 class="card__title">Who this is for</h3>
    <p class="card__text">
      Universities, mentors, and professionals who want to see real engineering thinking — from research and interviews to a build that evolves into a final product.
    </p>
    <div class="card__meta">
      <a class="btn" href="{{ '/about/' | relative_url }}">About Me</a>
      <a class="btn" href="mailto:khajan09singh@gmail.com">Contact</a>
    </div>
  </div>
</section>
