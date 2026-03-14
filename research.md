---
layout: page
title: Research
subtitle: "Research assessments and supporting documentation."
summary: "Ordered evidence log of research assessments, each linked to its source folder."
updated: "March 2026"
---

<section class="section stack">
  <h2 class="h2">Research Evidence Log</h2>
  <p>Each entry links to a folder with assessment materials. The sequence is preserved to show progression of inquiry and documentation quality over time.</p>

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
