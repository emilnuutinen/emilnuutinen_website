import Head from 'next/head'

export default function Home (props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>Hi Stranger</h1>
        <p>Welcome to my corner of the web. This website lives mainly as a sandbox for me to fiddle with different web technologies. I also try my best to blog about things I'm interested in, such as software development, data science, machine learning, privacy, etc.</p>

        <h2>This website</h2>
        <p>If you find any mistakes, bugs or other inappropriateness here, leave an issue or a pull requests to the <a href='https://github.com/emilnuutinen/emilnuutinen_website'>repository</a>.</p>
      </main>
    </>
  )
}
