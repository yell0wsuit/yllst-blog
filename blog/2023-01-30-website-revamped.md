---
title: 'Website revamped'
description: ""
authors: yell0wsuit
published: 2023-01-30
redirect_from: 
            - https://blog.yell0wsuit.page/2023/01/30/postid-208
tags: [announcement, development]
hero: ./img/new-zealand-queenstown-travel-guide-gq.webp
---

![](./img/new-zealand-queenstown-travel-guide-gq.webp)

:::info

The content below may be outdated and does not reflect the current state of the website. It is included here as-is for archival purposes.

:::

The theme is still there, but I decided to revamp it a little bit.

The most obvious changes are the navigation bar at the top, in which I added a toggle button to change to light/dark mode to suit your preference (in addition to the auto mode) instead of sticking to the default auto mode like before. The second change is the overall look of my website.

<!--truncate-->

Back when I developed the first iteration of my theme, I was content with it. But after taking a look at some of the premium themes online, I found that my theme was a bit bland, so I decided to buy one of them and changed some stuff. The premium theme I bought lead me to learn a bit about [Sass\_\_](https://sass-lang.com/) and [gulp-js\_\_](https://gulpjs.com/), which helps me a lot in accelerating website development. For example, instead of copying-and-pasting the navbar and footer over and over again, I can just resort to partial templates that automatically append in the final HTML files. I finally updated my website's CSS before January 2023 ends.

Initially I had a problem with the blog page, however. The code I used before didn't work for the current theme (it was messy), and I gave up at first. Then I found one particular pre-made "skeleton" (bare) WordPress theme that is built using Bootstrap 5 on [this website\_\_](https://them.es/starter-bootstrap/). Changing some classes to match with the current style, with help from [XAMPP\_\_](https://www.apachefriends.org/) to host local WordPress instance, I was able to update the blog's CSS to be consistent with the main website. Oh, and it's easier to maintain/update too!

The comment section, well, is surprisingly painless to update! That theme has implemented enough functions to show main and child comments, so I just need to update the classes. Say no to the default `li` tag though, those horrific dots at the beginning of the comment. Ugh!
