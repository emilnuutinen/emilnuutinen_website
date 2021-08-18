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
        description: frontmatter.content,
        url: '/posts/' + name.replace(/\.md?/, ''),
        date: frontmatter.data.date
      })
    })
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
