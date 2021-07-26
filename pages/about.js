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

        <p>I'm interested in <b>NLP</b> generally and in privacy conserving software solutions. I want to contribute in improving <b>finnish NLP</b> solutions. I'm also interested in <b>Computer Vision</b> and <b>Robotics</b>. It's hard to focus on one area when there are so many interesting problems in the world.</p>

        <h3>What I enjoy doing?</h3>
        <ul>
          <li>Research an interesting problem.</li>
          <li>Collect data about it & find useful insights from that data.</li>
          <li>Write a solution to that problem. (Usually with Python)</li>
          <li>Learn new skills to do those three things better.</li>
        </ul>

        <p>I also enjoy fiddling with frontend projects. I try new things on this website weekly. I have fallen in love with algorithms too lately. I enjoy coding challenges and implementing random algorithms that I bump into.</p>

        <h3>Most used technologies</h3>
        <ul>
          <li>Python [The basic scientific stack]</li>
          <li>JavaScript [React, Next.js, Node.js]</li>
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
