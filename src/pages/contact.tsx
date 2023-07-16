import Image from 'next/image';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import {motion} from 'framer-motion';
import styles from '../styles/Home.module.css';
import '../app/globals.css';
import {GithubSvg, LinkedInSvg} from '../components/Icons';

export default function Contact() {
  return (
    <div className='layout'>
      <Head>
        <title>Kai Jeng | Contact</title>
        <meta name="description" content="index"></meta>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
                          sm:p-8 pt-16">
              <AnimatedText text="Contact Me" className='!text-6xl' />
              <div className="grid w-full grid-cols-8 gap-16">
                <div className="col-span-3 flex flex-col items-start justify-start">
                  <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Get in Touch</h2>
                </div>
              </div>
              
          </div>
          <div className="z-0 inline-block lg:p-16 sm:p-8">
            <div className="flex justify-between float-left">
              <motion.a href="https://github.com/KyleWong613" target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-8 mx-3">
                <GithubSvg className='w-8 mx-3' />
              </motion.a>
              <a className="github" href="https://github.com/KyleWong613/" target="_blank">KyleWong613</a>
            </div>
            <br></br>
            <br></br>
            <div className="flex justify-between float-left">
              <motion.a href="https://www.linkedin.com/in/wong-kai-jeng/" target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-8 mx-3">
                <LinkedInSvg className='w-8 mx-3' />
              </motion.a> 
              <a className="linkedin " href="https://www.linkedin.com/in/wong-kai-jeng/" target="_blank">LinkedIn</a>
            </div>
          </div>
              
        </main>
      </div>
    </div>

  );
}