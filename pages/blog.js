import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Link from 'next/link'

export default function Blog ({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <main>
        <h1>Blog</h1>
        <p>Random ramblings about everything.</p>
        <ul>
          {posts.map((post, idx) => (
            <li key={idx}>{post.frontmatter.date}:&nbsp;
              <Link href={'/posts/' + post.slug}>
                <a>{post.frontmatter.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export async function getStaticProps () {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    }
  }
}
