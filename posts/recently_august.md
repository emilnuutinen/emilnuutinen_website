---
title: Life Update - August
date: "2021-08-19"
tags: [life, update]
---

I have procrastinated and come up with excuses when it comes to blogging. This has been going on for almost a year now. As a solution to this problem I decided to start writing these monthly updates. These are just free-form highlights about my life.

I have had the now-page on this website that does kind of the same thing, but I always forget to update that so I decided to start writing blog posts instead. I also want there to be a summary of my life that I can read later. I do write a journal and I have at least 5 years worth of journals, but they are long, messy and not meant for reading. This way of posting things publicly will force me to keep a readable history of my doings and readings etc. It will also force me to practice my writing skills.

## Updates to This Website

I implemented an RSS feed for this blog. I follow tens of other blogs through RSS and it felt dumb to not have an RSS feed on my own. I used the [RSS](https://github.com/dylang/node-rss) package because it was really simple to use. This website is made with Next.js and all I had to do was to add a Node.js script in scripts-folder on the root of my project. I then call that script on build time.

```javascript

const marked = require('marked')
const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate () {
  const feed = new RSS({
    title: 'Emil Nuutinen',
    site_url: 'https://emilnuutinen.com',
    feed_url: 'https://emilnuutinen.com/feed.xml'
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'posts'))

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'posts', name)
      )
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        description: marked(frontmatter.content),
        url: 'https://emilnuutinen.com/posts/' + name.replace(/\.md?/, ''),
        date: frontmatter.data.date
      })
    })
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()

```

First I read the files in to an object. I then map through them and pull the frontmatter and content into the RSS feed. I use [gray-matter](https://github.com/jonschlinkert/gray-matter) to pull the frontmatter out of the markdown files and [marked](https://github.com/markedjs/marked) to convert the markdown to html in the feed.

This is a little bit of extra work because Next.js does not have a native RSS plugin like Gatsby and many other frameworks have. But anyway, there is now an RSS feed available in the header of this site.

## Reading

[The Power of Now](https://www.goodreads.com/book/show/6708.The_Power_of_Now) - This was a first spiritual book that I have read and I was a bit sceptic about this one. I have been meditating and practicing mindfulness for a few years now, but I'm not religious nor am I that spiritual. But this book surprised me. It helped me to understand meditation much better and to be more mindful about my feelings when I react to things happening in my life. I really liked the first half of the book and I got the most out of the first three or four chapters. The rest of the book was a bit out of the reach for me. I will definitely read this one again in a year or so and see if I get more out of it then.

[The Black Swan](https://www.goodreads.com/book/show/242472.The_Black_Swan) - This was one of the first books in years that I did not read from cover to cover. It is a book that every one recommends and it actually has some really important lessons in it. I just felt that it has too much fluff in it. I ended up browsing through it quickly and not going deep into it. I'm not sure if I would recommend it. I feel that you get the whole point of the book from the many blog posts that have been written about it.

This month I only finished those two books. I have been lazy with books lately and read more blog posts and research papers. I started [How to Read a Book](https://www.goodreads.com/book/show/567610.How_to_Read_a_Book) this week and I'm loving it so far. It's also a really slow read and kind of a hard for non-english reader, because it was first written in 1940 and the language is pretty different than you see now. I want to get more out of the books that I read and this book has some good knowledge in it.

## Notes & Tasks

I have focused on my scripting skills this whole year. Every now and then I find some Eureka-moment where I improve my workflow significantly. I have been using Vim for my journaling and general note-taking for a year or so and I have a pretty solid setup with it, I'm even writing this post in Vim. I share this setup between my Desktop (Arch) and Macbook. I sync everything with Github.

What I have not been able to comfortably share between these two are my todos. For a couple of years now I have used Apple's Reminders app for my todos via Fantastical. I really like the setup. I always have my calendar in the week mode and my todos are shown on the top of every day. This mimics the way I used to have my paper calendar setup for years before I digitalised everything. The problem with this setup was that I could not use it with Arch. I tried to use Todoist for a while because it too integrates with Fantastical AND works in Linux. I never got the workflow to feel good on Linux though.

This month I took a leap of fate and moved to plain-text todos. I manage them through Vim and they get synced and opened together with my journal. I really like to have my journal and todos always open on the same workspace as my browser. I still have some automation to do (recurring todos etc.), but I really like it so far. I'm going to write a separate blog post about the whole system I've got going on. 

## Thoughts on Privacy

I do a yearly privacy check up usually in November-December, but this year I have been thinking about privacy more. I have two places where I would like to make changes: Google Workspace(GSuite) and iPhone.

I use Google Workspace with this domain attached to it. I don't use it for anything personal so it is not a big issue. I have it as a contact for this website and I use it for school stuff. Still, it is Google and I have been taking more and more distance to it for the past two years. This is something I need to decide on. I do have a paid ProtonMail account that I could use for email on this domain, but the rest of the Google workspace is still useful.

The bigger issue is iPhone though. Apple is implementing a backdoor into iPhones that allows them to scan all the images that you upload to iCloud [(Link)](https://www.eff.org/deeplinks/2021/08/if-you-build-it-they-will-come-apple-has-opened-backdoor-increased-surveillance). The biggest reason I have been using iPhones rather than Android is privacy. Yes, iPhone integrates beautifully into the ecosystem with Macbook too, but privacy over Android has been the main reason for my iPhone ownership. 

This single decision from Apple was a important turning point on the privacy philosophy of Apple. I don't trust them anymore with my personal data. My photos, messages, location data etc. My phone knows more about me than any other device or even person. I don't trust Apple with it anymore. 

The problem here is that there ain't really any better replacement for iPhone. Android phones are even worse privacy invaders. Linux phones aren't really usable yet. Privacy oriented Android versions could be one choice, but I need to research them more. I have even thought about a dumb phone. The problem is that I need a smart phone for my student card, bus card and authentication. I don't know how to replace those. I mean, there are ways, but they aren't really practical. 

Btw, if you want to speak against Apple's decision you can sign a petition at [EFF website](https://www.eff.org/deeplinks/2021/08/speak-out-against-apples-mass-surveillance-plans).

## Other stuff

I have been taking it really easy otherwise this whole summer. My master's studies start next week and I wanted to be well rested for that. Between 2016-2020 I worked/studied for 4 years without breaks or vacations and got really burned out. I don't want to do that mistake again. 

I have found my lost passion for gaming during this time. Or actually I started already in May 2020 when the COVID-lockdowns hit Finland, but it has been more fun now that I haven't had any obligations that don't get done if I play. I played mostly Fortnite, World of Tanks and Valorant. I want to test out some strategy games too. I just don't have much time for games when the school starts. 

I also finally got my first COVID-vaccine this month. Feels good to be a bit safer now that I need to be around people more.

This month was a bit lazy with the gym and exercise in general, but it has not been a priority now. I need to focus more on exercise now though. It is the best stress relief for me and keeps me energised.
