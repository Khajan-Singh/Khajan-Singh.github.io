---
layout: page
title: Research
subtitle: "Research assessments and supporting documentation."
summary: "Ordered log of research assessments, each linked to its source folder."
---

<section class="section stack">
  <h2 class="h2">Research Evidence Log</h2>
  <div class="pillgrid">
    {% for item in site.data.research %}
      <a class="pill" href="{{ item.url }}" target="_blank" rel="noopener">
        <div>
          <div class="pill__label">{{ item.label }}</div>
          <div class="pill__hint">Assessment evidence</div>
        </div>
        <div class="pill__hint">Open</div>
      </a>
    {% endfor %}
  </div>
</section>
