import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText'
import styles from '../styles/Home.module.css';
import '../app/globals.css';
import Layout from '@/components/Layout';
import { GithubSvg } from '@/components/Icons'; 
import React from 'react';
import {motion, useScroll} from "framer-motion"; 

const netlifyImageLoader = ({ src, width, quality }: {src: string, width: string, quality: string}) => {
  return `https://kaijeng.netlify.com/Content/img/${src}?w=${width}&q=${quality || 80}`
}

const FeaturedProject = ({year, title, summary, img, link, github}:
  {year: string, title: string, summary: string, img:string, link: string, github: string}) =>
  {
    return(
      <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl">
        <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target="_blank">
        <Image    loader={netlifyImageLoader}
                  width={500}
                  height={500}
                  src={img} alt={title}
                  className="w-full h-auto"
          ></Image>
        </Link>
  
        <div className="w-1/2 flex flex-col items-start justify-between pl-6"> 
          <Link href={link} target="_blank">
            <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
          </Link>     
          <span className='text-primary font-medium text-xl'>{year}</span>
          <p>{summary}</p>
          <div className="mt-2 flex items-center">
            {/* <Link href={github} target="_blank"> 
              <GithubSvg className='w-8 mx-3' />
            </Link> */}
            <Link href={link} target="_blank" className="rounded-lg bg-dark text-light text-lg font-semibold"> 
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    )
  }
  
  const FeaturedSmallProject = ({year, title, summary, img, link, github}:
    {year: string, title: string, summary: string, img:string, link: string, github: string}) =>
    {
      return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light shadow-2xl p-6 relative">
          <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target="_blank">
          <Image    loader={netlifyImageLoader}
                    width={350}
                    height={350}
                    src={img} alt={title}
                    className="w-full h-auto"
            ></Image>
          </Link>
    
          <div className="w-1/2 flex flex-col items-start justify-between mt-4"> 
            <Link href={link} target="_blank" className= "hover:underline underline-offset-2">
              <h3 className='my-2 w-full text-left text-2xl font-bold'>{title}</h3>
            </Link>
            <h4 className='text-primary font-medium text-xs'>{year}</h4>
            <p>{summary}</p> 

            <div className="w-full mt-2 flex items-center justify-between">
              <Link href={link} target="_blank" className="text-lg font-semibold underline"> 
                Visit Project
              </Link>
              {/* <Link href={github} target="_blank" className="ml-4text-lg font-semibold"> 
                <GithubSvg className='w-8 mx-3' />
              </Link> */}
            </div>
          </div>
        </article>
      )
    }

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
              <div className='w-[75%] mx-auto relative'>
                <div className="absolute left-12 top-0 h-full bg-dark origin-top ">

                  <div className="grid w-full grid-cols-8 gap-16">
                    <div className="col-span-3 flex flex-col items-start justify-start">
                      <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Welcome to my portfolio!</h2>
                    </div>
                  </div>
                  <p className='font-medium'>Hi, I am Kai Jeng, I am just another Software Engineer

                  </p>
                  <div className="grid grid-cols-12 gap-24">
                    <div className="col-span-12">
                      <FeaturedProject 
                      img="rwgenting.png"
                      title="Resords World"
                      summary="CMS Project Collaborating with Adobe AEM"
                      link="https://www.rwgenting.com"
                      year="2022"
                      github="www.google.com"
                      />
                    </div>
                    <div className="col-span-6">
                      <FeaturedSmallProject 
                        img="mrs.png"
                        title="MrsEasy"
                        summary="Food Ordering System"
                        link="https://www.mrseasy.com"
                        year="2021"
                        github=""
                        />
                    </div>
                    <div className="col-span-6">
                      <FeaturedSmallProject 
                        img="gopay.png"
                        title="GoPayz"
                        summary="ewallet"
                        link="https://www.gopayz.com.my/"
                        year="2022"
                        github=""
                        />
                    </div>
                  </div>
                </div>
            </div>
        </main>
        <main className={styles.main}>
          
        </main>
      </div>
    </div>
    
  );
}