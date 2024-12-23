import Image from 'next/image'
import styles from './view.module.css'

export function HomeView() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image className={styles.logo} src='/next.svg' alt='Next.js logo' width={180} height={38} priority />
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={'hover:text-background outline hover:bg-gray-900/80'}
            href='https://medium.com/@loveless.cherry/react-clean-architecture-1-6d853f563e70'
            target='_blank'
            rel='noopener noreferrer'
          >
            Go to my Medium
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href='https://github.com/pk9119/nextjs-clean-architecture' target='_blank' rel='noopener noreferrer'>
          <Image aria-hidden src='/github.svg' alt='Github icon' width={16} height={16} />
          Github
        </a>
        <a
          href='https://medium.com/@loveless.cherry/react-clean-architecture-1-6d853f563e70'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image aria-hidden src='/globe.svg' alt='Globe icon' width={16} height={16} />
          Go to Medium →
        </a>
      </footer>
    </div>
  )
}