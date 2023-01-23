---
title: SIAauto
date: '2021-11-13'
summary: App that let you to fill KHS's questionnaire in siauto.unmul.ac.id
logo: '/images/projects/siauto.png'
---

## What is SIAuto?

[SIAuto](https://siauto.dalamkotak.com) is an app for [Unmul's](https://unmul.ac.id) students to auto filled the questionnaire in [siauto.unmul.ac.id](https://sia.unmul.ac.id).

<!-- <Image
  src="/static/projects/images/siauto/siauto-app.png"
  width="500"
  height="500"
  alt="SIAuto"
  prority
/> -->

SIAuto is a simple app, you just need to filled the Username and Password, check whether you want fill all the questionnaire or just one
and there you go (◕ᴗ◕).

## Why made SIAuto?

I made SIAuto cuz' I was too lazy to filled the questionnaire and also I wanted people that had the same trouble didn't have to feel that.

## How SIAuto was made?

The first state of SIAuto was a console app based on [Python Selenium](https://github.com/oktoala/siauto-fill-kuesioner).

The app worked. But then I thought, "What if there's more people used it?". Then I made the GUI version of it using [Qt](https://doc.qt.io/qtforpython/)

It didn't go we very well. First, there are to much things to setup, which could be hassle to user when they wanted to used it.

Then, I made the web version of it using `React`, `Puppeteer` and `Firebase Cloud Function`, which called [SIAuto Web](https://github.com/oktoala/sia-auto-web)

It worked, but i couldn't deploy it, cuz Firebase Cloud Function is a paid service.

So, the last free thing that I could do is convert it to desktop app using Electron, React, and Puppeteer.

Suprisingly, It worked very well. 🥳

There weren't so many people that used it when It launched, but had a feedback from a user who used it was a whole new experience for me. ( ╹▽╹ )
