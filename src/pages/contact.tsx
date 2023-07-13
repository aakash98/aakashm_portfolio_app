import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '../app/globals.css';

export default function Contact() {
  return (
    <div className='layout'>
      <Head>
        <title>Kai Jeng | Contact</title>
        <meta name="description" content="index"></meta>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h4 className={styles.title}>
          </h4>

          <div className={styles.grid}>
            
          </div>
        </main>
      </div>
    </div>

  );
}