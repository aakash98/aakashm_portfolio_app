import Image from "next/image";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import styles from "src/styles/Home.module.css";
import React from "react";
import { motion, useScroll } from "framer-motion";
import "../app/globals.css";
import exp from "constants";
import python_logo from "/public/pythonlogo.png";
import django_logo from "/public/djangologo.png";
import mysql_logo from "/public/mysqllogo.png";
import redis_logo from "/public/redis-favicon-144x144.png";
import es_logo from "/public/elastic-elasticsearch-logo.png";
import kafka_logo from "/public/png-clipart-kafka-vertical-logo-tech-companies-thumbnail.png";
import ngx_logo from "/public/png-clipart-nginx-phusion-passenger-load-balancing-docker-world-wide-web-angle-text-thumbnail.png";
import aws_logo from "/public/Amazon_Web_Services-Logo.wine.png";

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
              <Image src={python_logo} alt="Logo 1" width={80} height={80} />
            </div>
            <div className="logo-new">
              <Image src={django_logo} alt="Logo 1" width={80} height={100} />
            </div>
            <div className="logo-new">
              <Image src={mysql_logo} alt="Logo 1" width={120} height={80} />
            </div>
            <div className="logo-new">
              <Image src="/psqllogo.png" alt="Logo 1" width={80} height={80} />
            </div>
            <div className="logo-new">
              <Image src={redis_logo} alt="Logo 1" width={80} height={80} />
            </div>
            <div className="logo-new">
              <Image src={es_logo} alt="Logo 1" width={80} height={80} />
            </div>
            <div className="logo-new">
              <Image src={kafka_logo} alt="Logo 1" width={80} height={80} />
            </div>
            <div className="logo-new">
              <Image src={ngx_logo} alt="Logo 1" width={80} height={80} />
            </div>
            <div className="logo-new">
              <Image src={aws_logo} alt="Logo 1" width={80} height={80} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
