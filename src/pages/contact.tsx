import Image from 'next/image';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import {motion} from 'framer-motion';
import styles from '../styles/Home.module.css';
import '../app/globals.css';
import {GithubSvg, LinkedInSvg} from '../components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

type Contact = {
    github: string
    linkedin: string
    email: string
    phone: string
  }
   
  export const getStaticProps: GetStaticProps<{
    contact: Contact
  }> = async () => {
    const res = await fetch('http://localhost:3000/api/contact')
    const contact = await res.json()
    return { props: { contact } }
  }

const fadein = {
  initial:{
      opacity:0,
  },
  animate:{
      opacity:1,
  }
}

export default function Contact({contact}: InferGetStaticPropsType<typeof getStaticProps>) {
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
              <motion.a href={contact.github} target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-8 mx-3">
                <GithubSvg className='w-8 mx-3' />
              </motion.a>
              <motion.a className="github" href={contact.github} target="_blank"
                variants={fadein}
                initial="initial"
                animate="animate"
              >KyleWong613</motion.a>
            </div>
            <br></br>
            <br></br>
            <div className="flex justify-between float-left">
              <motion.a href={contact.linkedin} target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-8 mx-3">
                <LinkedInSvg className='w-8 mx-3' />
              </motion.a> 
              <motion.a className="linkedin" href={contact.linkedin} target="_blank"
              variants={fadein}
              initial="initial"
              animate="animate">LinkedIn</motion.a>
            </div>
            <br></br>
            <br></br>
            <div className="flex justify-between float-left">          
              <FontAwesomeIcon icon={faPhone}  
              className="w-8 mx-3" />
              <motion.a className="phone" href={`tel:${contact.phone}`} target="_blank"
              variants={fadein}
              initial="initial"
              animate="animate">{contact.phone}</motion.a>
            </div>
            <br></br>
            <br></br>
            <div className="flex justify-between float-left">          
              <FontAwesomeIcon icon={faEnvelope}  
              className="w-8 mx-3" />
              <motion.a className="mail" href={`mailto:${contact.email}`} target="_blank"
              variants={fadein}
              initial="initial"
              animate="animate">{contact.email}</motion.a>
            </div>
          </div>



          <div className="z-0 inline-block lg:p-16 sm:p-8">
            
          </div>
        </main>
      </div>
    </div>

  );
}