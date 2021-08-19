import marked from 'marked'
import Head from 'next/head'
import Link from 'next/link'

export default function PostLayout (props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>
        <h1>{props.title}</h1>
        <p>Tags: [
          {props.tags.map(tag => (
            <small key={tag}>
              "{tag}",
            </small>
          ))}
          ]
        </p>
        <div dangerouslySetInnerHTML={{ __html: marked(props.content) }} />
        <Link href='/blog'>
          Back to blog index
        </Link>
      </main>
    </>
  )
}
