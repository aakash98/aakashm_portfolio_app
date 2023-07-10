import Image from 'next/image';
import styles from 'src/styles/Home.module.css';
import React from 'react';
import '../app/globals.css';
import { PositionType } from "@/util/ExperienceModel"

const Details = ({position, company, time, work}:{position: string, company: string, time:string, work: string}) =>
{
  return <li>
      <div>
        <h3>{position}&nbsp;<a href={company}>@{company}</a></h3>
        <span>
         {time}
        </span>
        <p>{work}</p>
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
          <div className={styles.expsection}>
          <h2></h2>
            <Image
              src="/ars.jpg"
              width={50}
              height={50}
              alt="ars"
            />          
            <Details position="Software Developer" company="Alpha Reds Solutions" time="2019-2022" work="Maintaining Multiple CMS Applications."/>
          </div>
          <div className={styles.expsection}>
          <h2>Micron Technology</h2>
            <Image
              src="/micron.png"
              width={50}
              height={50}
              alt="micron"
            />          
            <Details position="Software Engineer" company="Micron Technology" time="2022-Current" work="Maintaining the Micron Backend Advanced Scheduler (BEMAS) Application."/>
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