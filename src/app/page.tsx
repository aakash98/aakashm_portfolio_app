import Image from 'next/image';
import styles from 'src/styles/Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    
    <div className={styles.container}>
      <header className='w-full px-32 py-8 font-medium'>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contacts</Link>
          <Link href="/">Experiences</Link>
          <Link href="/">Home</Link>
        </nav>
        <div className='flex items-center justify-center mt-2'>
            <Link href="/"
            className='w-16 h-16 bg-dark text-light flex items-center justify-center'>KJ</Link>
        </div>
        <nav>
          <Link href="/">GitHub</Link>
          <Link href="/">LinkedIn</Link>
          <Link href="/">Contacts</Link>
          <Link href="/">Experiences</Link>
          <Link href="/">Home</Link>
        </nav>


      </header>
      <main className={styles.main}>
        <h4 className={styles.title}>
          My <a href="https://nextjs.org">Next.js</a> Application
        </h4>

        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
          <Link className={styles.card} href="/about"><h2>About Me</h2>
            <br />
            <p>Go to this page to learn more about me</p>
          </Link>

          <Link className={styles.card} href="/experiences"><h2>My Experiences</h2>
            <br />
            <p>Go to this page to learn about my Experiences</p>
          </Link>

          <Link className={styles.card} href=""><h2>Latest Movies</h2>
            <br />
            <p>Go to this page to see the latest Movie Lists</p>
          </Link>

          <Link className={styles.card} href="/contact"><h2>My Contact</h2>
            <br />
            <p>Go to this page to Contact Me</p>
          </Link>

          <Link className={styles.card} href="/sorting"><h2>Sorting</h2>
            <br />
            <p>Go to this page to learn about Sorting Algorithm</p>
          </Link>

          <Link className={styles.card} href="https://kaijeng.netlify.app/"><h2>My Netlify App</h2>
            <br />
            <p>Go to this page to learn about my Netlify Portfolio</p>
          </Link>

        </div>
      </main>






      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}