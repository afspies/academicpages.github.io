---
title: Some fun things made using P5.js
permalink: "/playground/"
excerpt: And you may ask yourself, "Well... how did I get here?"
layout: single
author_profile: false
# redirect_from:
# - "/playground/"
# - "/playground.html"
---

This is a page not in the menu. 
=====
fun fun

<script src="https://cdnjs.cloudflare.com/ajax/libs/tensorflow/4.6.0/tf.min.js"></script>

<script>
    // Load the MNIST dataset
const mnist = tf.data.mnist();
const trainData = mnist.train(0).batch(32);

// Define the neural network
const model = tf.sequential();
model.add(tf.layers.flatten({inputShape: [28, 28, 1]}));
model.add(tf.layers.dense({units: 128, activation: 'relu'}));
model.add(tf.layers.dense({units: 10, activation: 'softmax'}));
model.compile({optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy']});

// Train the neural network
await model.fitDataset(trainData, {epochs: 5});

// Get the canvas element and the button
const canvas = document.getElementById('canvas');
const button = document.getElementById('button');

// When the button is clicked, classify the image
button.addEventListener('click', () => {
  const imageData = canvas.getContext('2d').getImageData(0, 0, 28, 28);
  const input = tf.browser.fromPixels(imageData).reshape([1, 28, 28, 1]).toFloat().div(255);
  const prediction = model.predict(input).argMax(-1).dataSync()[0];
  document.getElementById('result').textContent = `Prediction: ${prediction}`;
});
</script>

  <canvas id="canvas" width="28" height="28"></canvas>
  <button id="button">Classify</button>
  <div id="result"></div>