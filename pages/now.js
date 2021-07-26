import Head from 'next/head'

export default function About () {
  return (
    <>
      <Head>
        <title>Now</title>
      </Head>
      <div>
        <h1>Now</h1>
        <p>This page is inspired by <a href='https://sive.rs/nowff'>Dereks Sivers'</a> now page.</p>

        <h2>Learning</h2>
        <p>I start my Computer Science Master's in September.</p>
        <p>Meanwhile I'm updgrading my knoweldge on <b>Linear Algebra </b>&<b> Machine Learning</b>. I'm also actively improving my <b>algorithm and data structures</b> skills.
        </p>

        <h2>Building</h2>
        <p>I'm constantly updating this website and keeping my web development skills sharp that way. Latest update was to move to <a href='https://nextjs.org/blog/next-11'>Next.js 11</a> and get rid of <a href='https://github.com/webpack-contrib/raw-loader'>raw-loader</a> from my blog (Next.js 11 uses Webpack v5 and raw-loader is depreacted for Webpack v5).</p>
        <p>I'm also doing a research about how the COVID-19 lockdowns affected introverts in comparison to extroverts. I'm mining Reddit's introvert and extrovert subreddits for the data.</p>

        <h2>Fitness</h2>
        <p>I'm currently dropping some lockdown weight and getting back into shape. I have worked out for the most of my life and during the lockdown I made an experiment to go the whole year 2020 without gym (actually from March 2020 to March 2021). The experiment teached me valuable lessons about my self-image and ego, but it also made me gain a lot of weight and get into a bad shape.</p>
        <p>I have dropped 10kg already (101kg -&gt; 91kg), but I still need to drop about 5-8kg to be in a good weight for me. I'm training in the gym 2-4 times per week and doing long walks 2-4 times per week. I'm not training or eating like a bodybuilder anymore. I train to stay healthy and eat to live long. I'm doing a simple push,pull & legs training split and eating a Mediterranean style diet.</p>

        <h2>Resting</h2>
        <p>I'm also resting. I worked & studied 4 years without a single vacation. I'm charging my batteries until I start my Master's. Good books and Fortnite & CS:GO have helped me with this.</p>

      </div>
    </>
  )
}
