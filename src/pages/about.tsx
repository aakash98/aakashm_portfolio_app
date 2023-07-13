import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText'
import styles from '../styles/Home.module.css';
import '../app/globals.css';

export default function About() {
  return (
    <div className='layout'>
      <Head>
        <title>Kai Jeng | About</title>
        <meta name="description" content="about"></meta>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
              <AnimatedText text="About Me" className='!text-6xl' />
              <p className='font-medium'>Hi, I am Kai Jeng, I am just another Software Engineer
              </p>
        </main>
      </div>
    </div>
    
  );
}