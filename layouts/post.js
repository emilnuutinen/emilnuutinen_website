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
        <small>Tags:
          {props.tags.map(tag => (
            <code key={tag}>
              &nbsp;`{tag}`
            </code>
          ))}
        </small>
        <div dangerouslySetInnerHTML={{ __html: marked(props.content) }} />
        <Link href='/blog'>
          Back to blog index
        </Link>
      </main>
    </>
  )
}
