import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { DownloadSvg } from "../components/Icons";
import profilePic from "../../public/aakash_resume_pic.webp";
import AnimatedText from "@/components/AnimatedText";
import styles from "src/styles/Home.module.css";
import "../app/globals.css";

export default function Home() {
  return (
    <div className="{styles.container}">
      <main className="flex items-center text-dark w-full min-h-screen xl:p-24 ">
        <Layout>
          <div className="flex items-center text-dark w-full min-h-screen">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Aakash"
                className="w-full h-auto br-5"
                priority
                sizes="(max-width: 768px) 100vw
                              (max-width: 1200px) 50vw
                              50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Solving Problems One Line Of A Code At A Time"
                className="!text-6xl !text-center xl:!text-5xl lg:!text-right lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl"
              />
              <p>
                As as Software Engineer, I always aim to solve problems no
                matter how crucial or benign. Finding creative and
                out-of-the-box solutions and sometimes solving problems via{" "}
                <Link
                  href={
                    "https://www.urbandictionary.com/define.php?term=Jugaad"
                  }
                  className="jugaad-link"
                >
                  jugaad
                </Link>{" "}
                gives me pleasure and enthusiasm.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/aakash_mahadevan_portfolio.pdf"
                  target={"blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border border-soldi border-transparent hover:border-dark
                "
                  download={false}
                >
                  Resume <DownloadSvg className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:imaakash98@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark"
                >
                  Email Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>

      <div className={styles.grid}>
        <Link className={styles.card} href="/about">
          <h2>About Me</h2>
          <br />
          <p className="paragraph accent-text">
            Go to this page to learn more about me
          </p>
        </Link>

        <Link className={styles.card} href="/experiences">
          <h2>My Experience</h2>
          <br />
          <p className="paragraph accent-text">
            Go to this page to learn about my Experiences
          </p>
        </Link>

        <Link className={styles.card} href="/certifications">
          <h2>My Accomplishments</h2>
          <br />
          <p className="paragraph accent-text">
            Go to this page to check out my Awards And Recognition
          </p>
        </Link>

        <Link className={styles.card} href="/contact">
          <h2>Contact Me</h2>
          <br />
          <p className="paragraph accent-text">Go to this page to Contact Me</p>
        </Link>
      </div>
    </div>
  );
}
