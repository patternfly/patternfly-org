---
author: lhinson
layout: page
---
{% capture my_include %}{% include styles/terminology-and-wording/terminology-and-wording.md %}{% endcapture %}
{{ my_include | site_replace | markdownify }}
