import Image from 'next/image';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText'
import styles from 'src/styles/Home.module.css';
import React from 'react';
import {motion, useScroll} from "framer-motion";
import '../app/globals.css';
import { PositionType } from "@/util/ExperienceModel"
import Layout from '@/components/Layout';
import Link from 'next/link';

const Details = ({position, company, companysite, time, work, worklink, worklinkdesc, work2, worklink2, worklinkdesc2, work3}:
  {position: string, company: string, companysite: string, time:string, work: string, worklink: string, worklinkdesc: string, 
   work2: string, worklink2: string, worklinkdesc2: string, work3: string}) =>
{
  return <li className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col'>
      <div>
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;<a href={companysite}>@{company}</a>
        </h3>
        <span className='capitalize font-medium text-dark'>
          {time}
        </span>
        <p className='font-medium w-full'>{work}<Link className="highlight" href={worklink} target="_blank">{worklinkdesc}</Link></p>
        <p className='font-medium w-full'>{work2}<Link className="highlight" href={worklink} target="_blank">{worklinkdesc2}</Link></p>
        <p className='font-medium w-full'>{work3}</p>
      </div>
    </li>
}

const EducationDetails = ({course, institution, time, sidecourse, sidecourselink, sidecourse2, sidecourselink2, sidecourse3}:
  {course: string, institution: string, time:string, sidecourse: string, sidecourselink: string, sidecourse2: string, sidecourselink2: string, sidecourse3: string}) =>
{
  return <li className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col'>
      <div>
        <h3 className='capitalize font-bold text-2xl'>
          {course}&nbsp;<br>
          </br>{institution}
        </h3>
        <span className='capitalize font-medium text-dark'>
          {time}
        </span>
        <p className='font-medium w-full'><Link className="highlight" href={sidecourselink} target="_blank">{sidecourse}</Link></p>
        <p className='font-medium w-full'><Link className="highlight" href={sidecourselink2} target="_blank">{sidecourse2}</Link></p>
      </div>
    </li>
}

export default function Experiences() {
  return (
    <div className=''>
      <div className={styles.container}>
        <Layout>  
          <main className={styles.main}>
          <AnimatedText text="Experiences" className='!text-6xl' />
            <div className='w-[75%] mx-auto relative'>
              <div className="absolute left-12 top-0 h-full bg-dark origin-top ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">My Career</h2>
                <Image
                  className="my-8 first:mt-0 last:mb-0 flex-col"
                  src="/ars.jpg"
                  width={50}
                  height={50}
                  alt="ars"
                />          
                <Details position="Software Developer" company="Alpha Red Solutions" companysite="https://www.alphareds.com/" time="2019-2022" 
                work="Maintaining Multiple CMS Applications Including Hotel/Travel Applications such as "
                worklink= "https://www.mayflower.com.my/"
                worklinkdesc= "Mayflower"
                work2="Migration of a decade Legacy project in Collaboration with "
                worklink2="https://business.adobe.com/"
                worklinkdesc2= "Adobe Experience Cloud"
                work3="Kickoff of A universal e-wallet service In Collaboration with U Mobile"/>
            
                <Image
                  className="my-8 first:mt-0 last:mb-0 flex-col"
                  src="/micron.png"
                  width={75}
                  height={75}
                  alt="micron"
                />          
                <Details position="Software Engineer" company="Micron Technology" companysite="https://www.micron.com/" time="2022-Current"
                work="Maintaining the Micron Backend Advanced Scheduler (BEMAS) Application focusing on Planning and "
                worklink= "https://www.vms-solutions.com/en/solutions/optimized-scheduling.php"
                worklinkdesc= "Optimized Scheduling"
                work2="Migrating Applications from VMs to Cloud using Tools for Containerization such as Docker and Openshift"
                worklink2 = ""
                worklinkdesc2=''
                work3="Migrating API Gateway from WSO2 to Apigee"/>
                </div>
            </div>
          </main>

          <main className={styles.main}>
            <div className='my-10'>
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
                  <EducationDetails course="Bachelor of Computer Science" institution="Monash University" time="2015-2018" 
                  sidecourse="Data Analytics"
                  sidecourselink="https://handbook.monash.edu/2021/units/FIT3152"
                  sidecourselink2="https://handbook.monash.edu/2023/units/FIT2004"
                  sidecourse2="Algorithms and Data Structures"
                  sidecourse3="Modelling for Data Analysis"/>
                  </div>  
              </div>  
            </div>
          </main>
        </Layout>  
      </div>
    </div>
  );
}