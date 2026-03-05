---
layout: page
title: Blog
subtitle: "Weekly reflections — newest to oldest."
---

<p>
  Posts are ordered newest to oldest automatically. Each entry is a weekly reflection documenting progress, challenges, and next steps.
</p>

{% if site.posts and site.posts.size > 0 %}
  <div class="bloglist">
    {% for post in site.posts %}
      <a class="postcard" href="{{ post.url | relative_url }}">
        <h3 class="postcard__title">{{ post.title }}</h3>
        <div class="postcard__meta">{{ post.date | date: "%B %-d, %Y" }}</div>
        <p class="postcard__excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
      </a>
    {% endfor %}
  </div>
{% else %}
  <div class="card">
    <h3 class="card__title">Ready for your weekly reports</h3>
    <p class="card__text">
      I can’t pull text directly from Google Drive links from here. To add your 23 weekly reports, paste each week into a post file in
      <code>_posts/</code>. I’ve included 23 placeholder posts so you can copy/paste quickly.
    </p>
  </div>
{% endif %}
