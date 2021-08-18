import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header () {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.menu}>
          <Link href='/'>
            Home
          </Link>
          &nbsp;-&nbsp;
          <Link href='/about'>
            About
          </Link>
          &nbsp;-&nbsp;
          <Link href='/blog'>
            Blog
          </Link>
          &nbsp;-&nbsp;
          <Link href='/uses'>
            Uses
          </Link>
          &nbsp;-&nbsp;
          <Link href='/feed.xml'>
            RSS
          </Link>
        </div>
      </div>
    </div>
  )
}
