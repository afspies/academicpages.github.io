---
title: Publications
permalink: "/publications/"
layout: archive
author: "alex_spies"
---

You can also find my articles on my <u><a href="https://scholar.google.com/citations?user=Jfp2pAQAAAAJ">Google Scholar profile</a>.</u>
<!-- {% if author.googlescholar %} -->
<!-- {% endif %} -->

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
