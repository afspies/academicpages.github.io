---
permalink: /
title: "About"
excerpt: "About"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I am a Ph.D. Candidate in CS at [Imperial College London](https://www.imperial.ac.uk/computing) - Currently working on Object-Centric learning, advised by <a href="https://wp.doc.ic.ac.uk/arusso/">Prof. A. Russo </a> and <a href="https://www.doc.ic.ac.uk/~mpsha/"> Prof. M. Shanahan</a>. 

I previously completed an MSc in AI and ML at Imperial, and an MPhys in Physics with Theoretical Physics at the <a href="https://www.manchester.ac.uk/">University of Manchester</a>.

# Before Contacting Me
I am not currently looking for full-time positions. However, I am always excited to discuss Ph.D. internship opportunites with a focus on Neurosymbolic and Object-Centric learning techniques. 

If you have questions about the **MSc in AI and ML** at Imperial, please see if these have been addressed in the [FAQ](/posts/2021/01/imperial-msc-faq) before reaching out to me.

I am more likely to respond to emails than LinkedIn requests.

<br/><br/>

# Posts
<ol>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    {{ post.excerpt }}
  </li>
{% endfor %}
</ol>