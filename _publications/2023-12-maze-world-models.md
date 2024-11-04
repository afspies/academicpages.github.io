---
title: Structured World Representations in Maze-Solving Transformers
date: 2023-09-19 00:00:00 +01:00
permalink: "/publication/2023-09-maze-transformers"
collection: publications
excerpt: Transformers trained to solve mazes form linear representations of maze structure, and acquire interpretable attention heads which facilitate path-following.
venue: NeurIPS 2023 UniReps Workshop
paperurl: https://arxiv.org/abs/2312.02566
biburl: "/files/bib_entries/ivanitskiy2023transformerworldmodels.bib"
citation: Ivanitskiy, M.I.*, <b>Spies, A.F.</b>*, Räuker, T.* et al. Structured World Representations in Maze-Solving Transformers. <i>NeurIPS 2023 UniReps Workshop</i>.
author_profile: false
teaser: "/images/teasers/teaser_mazetransformers.gif"
---

See blogpost: [Structured World Representations in Maze-Solving Transformers](https://unsearch.org/research/01_maze_transformer_world_representations/)
Twitter thread: 

Transformer models underpin many recent advances in practical machine learning applications, yet understanding their internal behavior continues to elude researchers. Given the size and complexity of these models, forming a comprehensive picture of their inner workings remains a significant challenge. To this end, we set out to understand small transformer models in a more tractable setting: that of solving mazes. In this work, we focus on the abstractions formed by these models and find evidence for the consistent emergence of structured internal representations of maze topology and valid paths. We demonstrate this by showing that the residual stream of only a single token can be linearly decoded to faithfully reconstruct the entire maze. We also find that the learned embeddings of individual tokens have spatial structure. Furthermore, we take steps towards deciphering the circuity of path-following by identifying attention heads (dubbed adjacency heads), which are implicated in finding valid subsequent tokens.

[Download paper here](https://arxiv.org/abs/2312.02566)

Recommended citation: Ivanitskiy, M.I., Spies, A.F., Räuker, T. et al. Structured World Representations in Maze-Solving Transformers. <i>NeurIPS 2023 UniReps Workshop</i>.

<details closed>
<summary>Bibtex Entry</summary>
<code>
<pre>
@article{ivanitskiy2023transformerworldmodels,
	doi = {10.48550/arXiv.2312.02566},
	url = {http://arxiv.org/abs/2312.02566},
	year = 2023,
	month = {dec},
	publisher = {{NeurIPS UniReps Workshop}},
	author = {Ivanitskiy, M.I. and Spies, A.F. and R{\"a}uker, T and others},
	title = {Structured {{World Representations}} in {{Maze-Solving Transformers}}},
}
</pre>
</code>
</details>
