---
layout: page
title: Résumé
subtitle: "My current résumé."
---

<div class="card">
  <h3 class="card__title">View / Download Résumé</h3>
  <p class="card__text">
    You can view my résumé below or open the PDF in a separate tab.
  </p>
  <div class="card__meta">
    <a class="btn btn--primary" href="{{ '/assets/resume/khajanresume.pdf' | relative_url }}" target="_blank" rel="noopener">Open PDF ↗</a>
    <a class="btn" href="{{ '/assets/resume/khajanresume.pdf' | relative_url }}" download>Download PDF</a>
  </div>
</div>

<div style="margin-top: 18px; border: 1px solid rgba(255,255,255,0.12); border-radius: 18px; overflow: hidden; background: rgba(255,255,255,0.04);">
  <iframe
    src="{{ '/assets/resume/khajanresume.pdf' | relative_url }}"
    width="100%"
    height="1100"
    style="border:0; display:block;"
    title="Khajan Singh Resume">
  </iframe>
</div>