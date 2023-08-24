import Image from "next/image";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import styles from "src/styles/Home.module.css";
import React from "react";
import { motion, useScroll } from "framer-motion";
import "../app/globals.css";
import exp from "constants";

export default function About() {
  return (
    <div className="container-new">
      <div className="content-new">
        <h1>About Me</h1>
        <div className="accent-line"></div>
        <p className={styles.paragraph}>
          I am a Software Engineer With 3 YoE. I have worked in fast-growing
          startups. I have developed multiple applications accross Python, PHP,
          LuaResty, NGINX, Django, etc. I always like to explore new
          technologies like NextJS.
        </p>
        <p className={styles.paragraph}>
          Apart From Coding, I love reading fantasy-fiction novels. I like going
          on treks and adventures. Needless to say, I love the beauty that the
          nature possesses.
        </p>
        <div className="accent-line"></div>
        <p className="paragraph accent-text">
          Feel free to reach out to me for collaborations and projects.
        </p>
      </div>
      <div className="technologies">
        <div className="content-new">
          <h2 className="technologies-title">Technologies I Have Worked On</h2>
          <div className="logoGrid">
            {/* Placeholder images */}
            <div className="logo-new">
              <Image
                src="/pythonlogo.png"
                alt="Logo 1"
                width={80}
                height={80}
              />
            </div>
            <div className="logo-new">
              <Image
                src="/djangologo.png"
                alt="Logo 1"
                width={80}
                height={100}
              />
            </div>
            <div className="logo-new">
              <Image
                src="/mysqllogo.png"
                alt="Logo 1"
                width={120}
                height={80}
              />
            </div>
            <div className="logo-new">
              <Image src="/psqllogo.png" alt="Logo 1" width={80} height={80} />
            </div>
            <div className="logo-new">
              <Image
                src="/redis-favicon-144x144.png"
                alt="Logo 1"
                width={80}
                height={80}
              />
            </div>
            <div className="logo-new">
              <Image
                src="/elastic-elasticsearch-logo.png"
                alt="Logo 1"
                width={80}
                height={80}
              />
            </div>
            <div className="logo-new">
              <Image
                src="/png-clipart-kafka-vertical-logo-tech-companies-thumbnail.png"
                alt="Logo 1"
                width={80}
                height={80}
              />
            </div>
            <div className="logo-new">
              <Image
                src="/png-clipart-nginx-phusion-passenger-load-balancing-docker-world-wide-web-angle-text-thumbnail.png"
                alt="Logo 1"
                width={80}
                height={80}
              />
            </div>
            <div className="logo-new">
              <Image
                src="/Amazon_Web_Services-Logo.wine.png"
                alt="Logo 1"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
