import '../styles/globals.css'
import '../styles/gruvbox.css'
import Layout from '../layouts/layout'
import '@ibm/plex'

export default function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
