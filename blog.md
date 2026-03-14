---
layout: page
title: Blog
subtitle: "Weekly engineering reflections in reverse chronological order."
summary: "Execution log covering progress, blockers, and next actions across the ISM cycle."
updated: "March 2026"
kicker: "Execution Log"
---

<section class="section stack">
  <h2 class="h2">Weekly Reports</h2>
  <p>Posts are listed newest to oldest. Each entry captures work completed, constraints encountered, and decisions for the next iteration.</p>
</section>

{% if site.posts and site.posts.size > 0 %}
  <div class="bloglist">
    {% for post in site.posts %}
      <a class="postcard" href="{{ post.url | relative_url }}">
        <h3 class="postcard__title">{{ post.title }}</h3>
        <div class="postcard__meta">{{ post.date | date: "%B %-d, %Y" }}</div>
        <p class="postcard__excerpt">{{ post.excerpt | strip_html | truncate: 170 }}</p>
      </a>
    {% endfor %}
  </div>
{% else %}
  <section class="section">
    <article class="evidence-card">
      <h3 class="evidence-card__title">No posts yet</h3>
      <p class="evidence-card__text">Add weekly markdown files to <code>_posts/</code> to publish entries automatically.</p>
    </article>
  </section>
{% endif %}
