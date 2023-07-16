import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText'
import styles from '../styles/Home.module.css';
import '../app/globals.css';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <div className='layout'>
      <Head>
        <title>Kai Jeng | About</title>
        <meta name="description" content="about"></meta>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
                          md:p-12 sm:p-8 pt-16">
              <AnimatedText text="About Me" className='!text-6xl' />
              <div className="grid w-full grid-cols-8 gap-16">
                <div className="col-span-3 flex flex-col items-start justify-start">
                  <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Welcome to my portfolio!</h2>
                </div>
              </div>
              <p className='font-medium'>Hi, I am Kai Jeng, I am just another Software Engineer

              
              </p>
          </div>
          
              
        </main>
      </div>
    </div>
    
  );
}