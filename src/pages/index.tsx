import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText'
import styles from 'src/styles/Home.module.css';
import '../app/globals.css';
import Link from "next/link";
import Layout from '@/components/Layout';
import profilePic from "../../public/my_pic.jpg";


export default function Home() {
  return (
    
    <div className='{styles.container}'>
      <main className='flex items-center text-dark w-full min-h-screen xl:p-24 '>
        <Layout >  
          <div className="flex items-center text-dark w-full min-h-screen">
            <div className='w-1/2'>
              <Image src={profilePic} alt="Kaijeng" className='w-full h-auto'></Image>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Ideas into Code" className='!text-6xl !text-left' />
              <p>
                As a Software Engineer, I am dedicated to turn ideas into creative web applications. Explore my projects and experiences, showcasing my various fields in Software Development.
              </p>
            </div>
          </div>
        </Layout>
      </main>
      
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
    </div>
  );
}