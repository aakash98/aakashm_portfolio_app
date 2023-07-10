import Image from 'next/image';
import styles from '../styles/Home.module.css';
import '../app/globals.css';
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold uppercase'>Biography</h2>
            <p className='font-medium'>Hi, I am Kai Jeng, I am just another Software Engineer
            
            </p>
            
          </div>

        </div>
      </main>
    </div>
  );
}