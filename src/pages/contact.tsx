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
import {useRouter} from 'next/router';
import { loadContact } from '../util/loadContact'

type Contact = {
  github: string
  linkedin: string
  email: string
  phone: string
}

export async function getStaticProps() {
  const contacts = await loadContact()
  return {
      props: {
          contacts
      }
  }
}

const fadein = {
  initial: {
      opacity: 0,
  },
  animate: {
      opacity: 1,
  }
}

export default function Contact({contacts}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  if (router.isFallback){
    return <p>Loading...</p>
  }
  else{
    return (
      <div className='layout'>
        <Head>
          <title>Kai Jeng | Contact</title>
          <meta name="description" content="index"></meta>
        </Head>
        <div className={styles.container}>
          <main className={styles.main}>
            <AnimatedText text="Contact Me" className='!text-6xl' />
                <div className='w-[75%] mx-auto relative'>
                  <div className="absolute left-12 top-0 h-full bg-dark origin-top ">
  
                    <div className="grid w-full grid-cols-8 gap-16">
                      <div className="col-span-3 flex flex-col items-start justify-start">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Get in Touch</h2>
                        <div className="z-0 inline-block ">
                          <div className="flex justify-between float-left">
                            <motion.a href={contacts.github} target={"_blank"}
                            whileHover={{y:-2}}
                            whileTap={{scale:0.9}}
                            className="w-8 mx-3">
                              <GithubSvg className='w-8 mx-3' />
                            </motion.a>
                            <motion.a className="github" href={contacts.github} target="_blank"
                              variants={fadein}
                              initial="initial"
                              animate="animate"
                            >KyleWong613</motion.a>
                          </div>
                          <br></br>
                          <br></br>
                          <div className="flex justify-between float-left">
                            <motion.a href={contacts.linkedin} target={"_blank"}
                            whileHover={{y:-2}}
                            whileTap={{scale:0.9}}
                            className="w-8 mx-3">
                              <LinkedInSvg className='w-8 mx-3' />
                            </motion.a> 
                            <motion.a className="linkedin" href={contacts.linkedin} target="_blank"
                            variants={fadein}
                            initial="initial"
                            animate="animate">LinkedIn</motion.a>
                          </div>
                          <br></br>
                          <br></br>
                          <div className="flex justify-between float-left">          
                            <FontAwesomeIcon icon={faPhone}  
                            className="w-8 mx-3" />
                            <motion.a className="phone" href={`tel:${contacts.phone}`} target="_blank"
                            variants={fadein}
                            initial="initial"
                            animate="animate">{contacts.phone}</motion.a>
                          </div>
                          <br></br>
                          <br></br>
                          <div className="flex justify-between float-left">          
                            <FontAwesomeIcon icon={faEnvelope}  
                            className="w-8 mx-3" />
                            <motion.a className="mail" href={`mailto:${contacts.email}`} target="_blank"
                            variants={fadein}
                            initial="initial"
                            animate="animate">{contacts.email}</motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            <div className="z-0 inline-block lg:p-16 sm:p-8">
              
            </div>
          </main>
        </div>
      </div>
  
    );
  }
  
}