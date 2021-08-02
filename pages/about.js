import Head from 'next/head'

export default function About () {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h1>About</h1>

        <h2>Short version</h2>
        <p><b>Name:</b> Emil Nuutinen <br />
          <b>Location:</b> Turku, Finland <br />
          <b>Education:</b> B.B.A. Business Information Technology, Turku University of Applied Sciences <br />
          <b>Interests:</b> Data Science, Software Development, Linux, FOSS, Privacy, Reading, Philosophy, Psychology, Gym, Gaming, Introverting, Over-engineered note-taking methods & Drinking too much coffee <br />
          <b>Contact:</b> hello@emilnuutinen.com
        </p>

        <h2>Long version</h2>
        <p>Hi, my name is Emil. I'm a <b>software developer</b> studying to become a <b>data scientist</b>.</p>

        <p> I graduated with a degree in <b>Business Information Technology</b> in December 2020 and I'm going to start my C.S. Master's in September 2021. My goal is to work in research some day.</p>

        <p>Professionally I'm interested in <b>data science</b> generally and in privacy respecting software solutions. I'm concerned about the current state of software and privacy. I believe we can build innovative data-oriented products without violating the privacy of the users and I want to contribute into building them.</p>

        <p>I'm also interested in <b>robotics</b> and <b>self-driving cars</b>. I would love to see a future where humans don't drive anymore and robots handle all the task that are repetitive, dangerous or need precision that we humans are not capable of.</p>

        <p>On my freetime I enjoy exploring Unix-based operating systems. I installed my first Linux in 2004. For the last 2 years I have used Arch Linux as my daily driver. I value privacy and customizability so Linux is a good fit for me. In the near future I'm going to dive into BSD too, they seem more robust and secure than Linux distros. BSD has been a huge interest for me for some time and I'm going to try FreeBSD soon.</p>

      <p>I really enjoy tools that stay out of the way and <i>let you do the things you want in the way you want</i>. <br /> 
        That is why I:</p>

        <ul>
          <li>Enjoy using Linux.</li>
          <li>Use mostly CLI-tools.</li>
          <li>Use i3 as my VM on Arch.</li>
          <li>Use Vim and markdown-files as my note-taking and task-management tools.</li>
          <li>Etc, the list goes on...</li>
        </ul>
        
        <p>I'm also a big advocate for offline-first tools. I want my tools to open instantly and I want to know exactly where my data lives and I want be in a full control of it.</p>

        <p>When I'm not on my computer over-engineering everything, I like to read alot. I read mostly non-fiction books. And I love personal blogs. I'm not on social media, but I follow many blogs. Reading through my RSS feeds is a big part of my morning routine.</p>

        <p>I also love long walks and sunsets, but rainy days are my favorites.</p>

        <p>I like to keep myself physically active and most of the time I'll do it at the gym. I also want to start bouldering.</p>

        <p>I'm also a bit of a foodie. My greatest weaknesses are coffee, craft beers, tapas and pizzas.</p>

        <h3>Most used technologies</h3>
        <ul>
          <li>Python [The basic scientific stack]</li>
          <li>JavaScript [React, Next.js, Node.js]</li>
          <li>Bash</li>
          <li>HTML & CSS</li>
        </ul>

        <h3>Contact</h3>
        <ul>
          <li>Email: hello@emilnuutinen.com</li>
          <li>Github: <a href='https://github.com/emilnuutinen'>emilnuutinen</a></li>
          <li>Matrix: @emilnuutinen:matrix.org</li>
        </ul>
      </main>
    </>
  )
}
