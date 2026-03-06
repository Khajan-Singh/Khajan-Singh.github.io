---
layout: page
title: Resume
subtitle: "View and download my current resume."
---

{% assign resume_pdf = '/assets/Khajan Singh New Resume.pdf' | replace: ' ', '%20' %}

<div class="resume-actions">
  <a class="btn btn--primary" href="{{ resume_pdf | relative_url }}" target="_blank" rel="noopener">Open Resume (PDF)</a>
  <a class="btn" href="{{ resume_pdf | relative_url }}" download>Download Resume</a>
</div>

<div class="resume-frame card">
  <iframe
    title="Khajan Singh Resume PDF"
    src="{{ resume_pdf | relative_url }}"
    loading="lazy">
  </iframe>
</div>
