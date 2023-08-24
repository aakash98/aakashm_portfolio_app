import Image from "next/image";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import styles from "src/styles/Home.module.css";
import React from "react";
import { motion, useScroll } from "framer-motion";
import "../app/globals.css";
import { PositionType } from "@/util/ExperienceModel";
import Layout from "@/components/Layout";
import Link from "next/link";

const Details = ({
  position,
  company,
  companysite,
  time,
  work,
  worklink,
  worklinkdesc,
  work2,
  worklink2,
  worklinkdesc2,
  work3,
}: {
  position: string;
  company: string;
  companysite: string;
  time: string;
  work: string;
  worklink: string;
  worklinkdesc: string;
  work2: string;
  worklink2: string;
  worklinkdesc2: string;
  work3: string;
}) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 mx-auto flex flex-col">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;<a href={companysite}>@{company}</a>
        </h3>
        <span className="capitalize font-medium text-dark">{time}</span>
        <p className="font-medium w-full">
          {work}
          <Link className="highlight" href={worklink} target="_blank">
            {worklinkdesc}
          </Link>
        </p>
        <p className="font-medium w-full">
          {work2}
          <Link className="highlight" href={worklink} target="_blank">
            {worklinkdesc2}
          </Link>
        </p>
        <p className="font-medium w-full">{work3}</p>
      </div>
    </li>
  );
};

const EducationDetails = ({
  course,
  institution,
  time,
  sidecourse,
  sidecourselink,
  sidecourse2,
  sidecourselink2,
  sidecourse3,
}: {
  course: string;
  institution: string;
  time: string;
  sidecourse: string;
  sidecourselink: string;
  sidecourse2: string;
  sidecourselink2: string;
  sidecourse3: string;
}) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 mx-auto flex flex-col">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {course}&nbsp;<br></br>
          {institution}
        </h3>
        <span className="capitalize font-medium text-dark">{time}</span>
        <p className="font-medium w-full">
          <Link className="highlight" href={sidecourselink} target="_blank">
            {sidecourse}
          </Link>
        </p>
        <p className="font-medium w-full">
          <Link className="highlight" href={sidecourselink2} target="_blank">
            {sidecourse2}
          </Link>
        </p>
      </div>
    </li>
  );
};

export default function Experiences() {
  return (
    <div className="">
      <div className={styles.container}>
        <Layout>
          <main className={styles.main}>
            <AnimatedText
              text="Experience"
              className="dark:text-light text-8xl font-bold w-full capitalize !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl"
            />
            <div className="w-[75%] mx-auto relative">
              <div className="absolute left-12 top-0 h-full bg-dark origin-top ">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                  My Career
                </h2>
                <Image
                  className="my-8 first:mt-0 last:mb-0 flex-col"
                  src="/spinny.webp"
                  width={50}
                  height={50}
                  alt="ars"
                />
                <Details
                  position="Software Engineer 2"
                  company="Spinny"
                  companysite="https://www.spinny.com/"
                  time="2021-Current"
                  work="Platform Engineer And Pricing & Auth Service Team Lead "
                  worklink="https://www.spinny.com/sell-used-car/"
                  worklinkdesc="Pricing Calculator"
                  work2="Created Inventory Service Which Manages Listings And Car Meta Details "
                  worklink2="https://www.spinny.com/max/used-cars-in-mumbai/s/"
                  worklinkdesc2=" Sample Listing Page"
                  work3="Created Customized Batch Processing Consumers For SQS, Kafka And Configured Autoscaling For Them"
                />

                <Image
                  className="my-8 first:mt-0 last:mb-0 flex-col"
                  src="/hb_1.png"
                  width={50}
                  height={50}
                  alt="ars"
                />
                <Details
                  position="Software Engineer"
                  company="Hungerbox"
                  companysite="https://www.hungerbox.com/"
                  time="2020-2021"
                  work="Worked In The Ordering System Overhaul Which Was Used By 500k customers every day"
                  worklink=""
                  worklinkdesc=""
                  work2="Developed Global Food Menu Search By Setting Up Data Pipelines Using CRONs And Indexed With Elasticsearch"
                  worklink2=""
                  worklinkdesc2=""
                  work3="Developed Notification Module Based On Configurable Handlers With FCM, Kaleyra, Webengage"
                />

                <Image
                  className="my-8 first:mt-0 last:mb-0 flex-col"
                  src="/IIT_Madras_Logo.svg.png"
                  width={50}
                  height={50}
                  alt="ars"
                />
                <Details
                  position="Research Intern"
                  company="IIT Madras - Computational Neuroscience Lab"
                  companysite="https://biotech.iitm.ac.in/Faculty/CNS_LAB/home.html"
                  time="2019"
                  work="Ascertained The Presence Of Object Vector Cells Which Was Published In The ACCS 2019 Conference: "
                  worklink="https://www.linkedin.com/in/aakash-mahadevan/overlay/1613158427611/single-media-viewer/?profileId=ACoAAB__0EkBFiQmrZNt6SrDVDGMKxJK0E-dcxc"
                  worklinkdesc="Conference Paper"
                  work2="Optimized The Anti-Hebbian Model Training Time By 50%"
                  worklink2=""
                  worklinkdesc2=""
                  work3="Parameter Tuning And Simulation Engine (Anti-Hebbian Model) Development"
                />
              </div>
            </div>
          </main>
          <main className={styles.mainspace}></main>
          <main className={styles.main}>
            <div className="my-10 ">
              <AnimatedText
                text="Education"
                className="dark:text-light text-8xl font-bold w-full capitalize !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl"
              />
              <div className="w-[75%] mx-auto relative ">
                <div className="absolute left-12 top-0 h-full bg-dark origin-top ">
                  <Image
                    className="my-8 first:mt-0 last:mb-0 flex-col"
                    src="/lnmiit.jpeg"
                    width={50}
                    height={50}
                    alt="monash"
                  />
                  <EducationDetails
                    course="Bachelor Of Technology In Communications And Computer Engineering"
                    institution="The LNM Institue Of Information Technology, Jaipur"
                    time="2016-2020"
                    sidecourse="CGPA 7.4/10"
                    sidecourselink=""
                    sidecourselink2=""
                    sidecourse2=""
                    sidecourse3=""
                  />
                </div>
              </div>
            </div>
          </main>
        </Layout>
      </div>
    </div>
  );
}
