import Image from 'next/image';
import styles from 'src/styles/Home.module.css';
import '../app/globals.css';
import { PositionType } from "@/util/ExperienceModel"

export default function Experiences() {
  return (
    
    <div className={styles.container}>
      <main className={styles.main}>
        <h4 className={styles.title}>
          Experience
        </h4>

        <div className={styles.grid}>
          <div className={styles.expsection}>
          <h2>Alpha Reds Solutions</h2>
            <Image
              src="/ars.jpg"
              width={50}
              height={50}
              alt="ars"
            />



            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div className={styles.expsection}>
          <h2>Micron Technology</h2>
            <Image
              src="/ars.jpg"
              width={50}
              height={50}
              alt="ars"
            />



            <p>Find in-depth information about Next.js features and API.</p>
          </div>

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