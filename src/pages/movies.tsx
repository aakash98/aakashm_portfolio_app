import Layout from '../components/pagelayout';
import { Inter } from 'next/font/google'
import styles from 'src/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Pages({
    children,
  }: {
    children: React.ReactNode
  }) {  return (
    <Layout> 
   
        <div className={styles.container}>
        <main className={styles.main}>
            <h4 className={styles.title}>
            My <a href="https://nextjs.org">Next.js</a> Application
            </h4>

            <p className={styles.description}>
            </p>

            <div className={styles.grid}>
            <a href="/" className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
            </a>
            <a href="https://nextjs.org/learn" className={styles.card}>
                <h2>Learn &rarr;</h2>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
            <a
                href="https://github.com/vercel/next.js/tree/canary/examples"
                className={styles.card}>
                <h2>Examples &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
            </a>
            <a href="https://nextjs.org/learn" className={styles.card}>
                <h2>Learn &rarr;</h2>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
            <a
                href="https://github.com/vercel/next.js/tree/canary/examples"
                className={styles.card}>
                <h2>Examples &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
            </div>
        </main>






        </div>
    </Layout>
  )
}