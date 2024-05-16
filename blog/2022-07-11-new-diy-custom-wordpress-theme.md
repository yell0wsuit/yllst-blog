---
title: 'New DIY custom Wordpress theme'
description: ""
authors: yell0wsuit
published: 2022-07-11
redirect_from: 
            - https://blog.yell0wsuit.page/2022/07/11/postid-154
tags: [announcement]
hero: ./img/1598R-12850536.webp
---

![](./img/1598R-12850536.webp)

:::info

The content below may be outdated and does not reflect the current state of the website. It is included here as-is for archival purposes.

:::

Yes, I made my own Wordpress theme! Now its design is consistent with my homepage's (better than Windows 11's theme consistency--joke!).

Starting from the very basic stuff like importing the HTML elements from my own design, well it's kinda easy. I have to learn PHP along with Wordpress codes in order to incorporate dynamic stuff into static elements. But it took me a week to make this design from scratch. Why?

<!--truncate-->

It's because of:

- The archive section in the sidebar
- The comments

The archive section in the sidebar took me several days to make it to use the custom CSS list code from Bootstrap. I almost gave up on this, but then I found a very simple solution--it exists within the `wp_get_archives()` function (by adding classes to the &lt;li> element inside both 'format' and 'before').

The comments, it's different. Implementing styles for parent--or main--comments, is easy. But for child comments, it's not. This really gave me headache 🤨. I searched through Stack Overflow and using `if($comment->comment_parent)`, along with `comment_text($comment->comment_child)`, worked for me.

And I thought it was done, but then my blog does not display properly on mobile. Turned out I forgot to add viewport meta in the header 🤦, lol.

While my theme seems complete, I haven't implemented page navigation for posts. I'll do it soon.
