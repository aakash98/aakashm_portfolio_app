import Image from 'next/image';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText'
import styles from 'src/styles/Home.module.css';
import React from 'react';
import {motion, useScroll} from "framer-motion";
import '../app/globals.css';
import { PositionType } from "@/util/ExperienceModel"

const Details = ({position, company, companysite, time, work}:{position: string, company: string, companysite: string, time:string, work: string}) =>
{
  return <li className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col'>
      <div>
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;<a href={companysite}>@{company}</a>
        </h3>
        <span className='capitalize font-medium text-dark'>
          {time}
        </span>
        <p className='font-medium w-full'>{work}</p>
      </div>
    </li>
}

const EducationDetails = ({course, institution, time, sidecourse}:{course: string, institution: string, time:string, sidecourse: string}) =>
{
  return <li className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col'>
      <div>
        <Head>
          <title>Kai Jeng | Experiences</title>
          <meta name="description" content="index"></meta>
        </Head>
        <h3 className='capitalize font-bold text-2xl'>
          {course}&nbsp;<br>
          </br>{institution}
        </h3>
        <span className='capitalize font-medium text-dark'>
          {time}
        </span>
        <p className='font-medium w-full'>{sidecourse}</p>
      </div>
    </li>
}

export default function Experiences() {
  return (
    <div className=''>
      <div className={styles.container}>
        <main className={styles.main}>
        <AnimatedText text="Experiences" className='!text-6xl' />
          <div className='w-[75%] mx-auto relative'>
          <div className="absolute left-12 top-0 h-full bg-dark origin-top ">
              <Image
                className="my-8 first:mt-0 last:mb-0 flex-col"
                src="/ars.jpg"
                width={50}
                height={50}
                alt="ars"
              />          
              <Details position="Software Developer" company="Alpha Red Solutions" companysite="https://www.alphareds.com/" time="2019-2022" work="Maintaining Multiple CMS Applications Including Hotel/Travel Applications"/>
          
              <Image
                className="my-8 first:mt-0 last:mb-0 flex-col"
                src="/micron.png"
                width={75}
                height={75}
                alt="micron"
              />          
              <Details position="Software Engineer" company="Micron Technology" companysite="https://www.micron.com/" time="2022-Current" work="Maintaining the Micron Backend Advanced Scheduler (BEMAS) Application which focuses on Planning and Scheduling ."/>
            </div>
          </div>
        </main>

        <main className={styles.main}>
        <AnimatedText text="Education" className='!text-6xl' />

        <div className='w-[75%] mx-auto relative '>         
          <div className="absolute left-12 top-0 h-full bg-dark origin-top ">
          <Image
                className="my-8 first:mt-0 last:mb-0 flex-col"
                src="/monash.png"
                width={50}
                height={50}
                alt="monash"
              />          
            <EducationDetails course="Bachelor of Computer Science" institution="Monash University" time="2015-2018" sidecourse="Minoring in Data Science"/>
          </div>  
        </div>  
        </main>
      </div>
    </div>
  );
}