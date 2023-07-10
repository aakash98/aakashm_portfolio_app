import Image from 'next/image';
import styles from 'src/styles/Home.module.css';
import React from 'react';
import '../app/globals.css';
import { PositionType } from "@/util/ExperienceModel"

const Details = ({position, company, companysite, time, work}:{position: string, company: string, companysite: string, time:string, work: string}) =>
{
  return <li className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center'>
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

export default function Experiences() {
  return (
    
    <div className={styles.container}>
      <main className={styles.main}>
        <h4 className={styles.title}>
          Experience
        </h4>

        <div className='w-[75%] mx-auto relative'>
          <div className="absolute left-8 top-0 h-full bg-dark origin-top">
            <Image
              className="my-8 first:mt-0 last:mb-0 flex-col"
              src="/ars.jpg"
              width={50}
              height={50}
              alt="ars"
            />          
            <Details position="Software Developer" company="Alpha Red Solutions" companysite="https://www.alphareds.com/" time="2019-2022" work="Maintaining Multiple CMS Applications."/>
         
            <Image
              className="my-8 first:mt-0 last:mb-0 flex-col"
              src="/micron.png"
              width={50}
              height={50}
              alt="micron"
            />          
            <Details position="Software Engineer" company="Micron Technology" companysite="https://www.micron.com/" time="2022-Current" work="Maintaining the Micron Backend Advanced Scheduler (BEMAS) Application."/>
          </div>
        </div>
        




      </main>






      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}