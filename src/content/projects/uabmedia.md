---
id: UABmedia
title: UAB media
date: 2022-01-16
category: web
backgroundColor: "#faabff"
images:
  [
    {
      src: /UABMedia/0.webp,
      alt: Example of a display when the UI of the app is shown,
    },
    {
      src: /UABMedia/1.webp,
      alt: Example of a display when the UI of the app is shown,
    },
    {
      src: /UABMedia/2.webp,
      alt: Example of a display when the UI of the app is shown,
    },
    {
      src: /UABMedia/3.webp,
      alt: Example of a display when the UI of the app is shown,
    },
    {
      src: /UABMedia/4.webp,
      alt: Example of a display when the UI of the app is shown,
    },
    {
      src: /UABMedia/5.webp,
      alt: Example of a display when the UI of the app is shown,
    },
  ]
tags: [PHP, WebTV, BOOTSTRAP, JQUERY, AWS]
invisibleTags:
  [UAB, Autonoma, amazon, frontend, comunicacio, television, radio, Universidad]
description: Web and mobile application for viewing UAB Mèdia content. On this page you can see the news, television programs, radio and interviews in real time and on demand. You can also listen to the college radio.
githubLink: https://github.com/orgs/UABmedia/repositories
link: https://uab.media/
---

## What is UABMèdia

UABMèdia is a vital importance project from UAB University in Barcelona.

Consists in a web service to consult any media product made there. All podcasts, news, video programs and any kind of cultural events are stored here as a **digital library** of the communication department of the university.

<picture>
<img class='w-96' src='/images/UABMedia/1.webp'>
<figcaption>Mobile design showing news.</figcaption>
</picture>

You can even listen the University radio from the website without downloading any app.

### Tech Stack

The main tool for make UABMèdia a reality is _PHP_ programming language and _Javascript_ for the interaction.
It works with _WebTV_ services and **AWS database** to storage the media.

In the website, we use diferent APIs to consult these results and show them to the user.

We use Javascript in different ways as frontend functions (for instance play or pause music, set a timer to the radio...) or to conditionally show different content:
For example, if the news are on air you will se them.

### Responsive

<div class='grid gap-8 grid-cols-1 md:grid-cols-2'>
<picture>
<img class='max-h-[650px]' src='/images/UABMedia/4.webp'>
<figcaption>Mobile design showing news.</figcaption>
</picture>
<div class='mt-6'>
The responsive design is a key for the service, this last year, the <strong>78% of the visits are done in mobiles device</strong> (less than 768px width screens) so mobile experience needs to be as good or even better than in wide devices.

In this example we can see how the content is placed in mobile devices:

<ul>
<li> Navigation is moved to the bottom part as modern interface.</li>
<li> The current selected tab is darker to always know where you are.</li>
<li> The radio section has another color to mark it's parts, the play button has a hard contrast so we are showing how important it is for the website.</li>
<li> All boxes (as the weather one) have a limitted width and a small margins in the horizontal direction so will never touch the sides of the screen (it's part of the interface, main different compared to the radio or navigation section)</li>
  
  
  </ul>

</div>
</div>
