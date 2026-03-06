---
layout: page
title: Research
subtitle: "Research assessments and documentation (linked folders)."
---

<p>
  This section contains my research assessments in order. Each button links to a Google Drive folder for that assessment.
</p>

<h2>Research Assessments</h2>
<div class="pillgrid">
  {% for item in site.data.research %}
    <a class="pill" href="{{ item.url }}" target="_blank" rel="noopener">
      <div>
        <div class="pill__label">{{ item.label }}</div>
        <div class="pill__hint">Open folder</div>
      </div>
      <div class="pill__hint">↗</div>
    </a>
  {% endfor %}
</div>
