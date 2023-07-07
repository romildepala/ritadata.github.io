import Image from "next/image";

import styles from "../styles/B2C.module.css";
import { DownloadRitaButton } from "../src/components/layout/DownloadRitaButton";
import { Layout } from "../src/components/layout/Layout";
import { Testimonial } from "../src/components/layout/Testimonial";
import { RitaShowcase } from "../src/components/layout/RitaShowcase";
import { CharacteristicsCard } from "../src/components/layout/CharacteristicsCard";
import { FAQ } from "../src/components/layout/FAQ";

export default function Home() {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.aboutHeaderContainer}>
          <div className={styles.someContainer}>
            <h1
              className={[styles.title, styles.anotherTitle].join(" ")}
              style={{ textAlign: "center" }}
            >
              We believe that
              <br />
              only one person
              <br />
              can have control over your data,
              <br />
              that’s you.
            </h1>
          </div>

          <div className={styles.phoneContainer}>
            <div className={styles.phones}></div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <h1 className={styles.title} style={{ textAlign: "center" }}>
            We exist to make data work for
            <br />
            everyone.
          </h1>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.loveRita}>
            <h1 className={styles.title} style={{ textAlign: "center" }}>
              Built with
            </h1>
            <div className={styles.heartSvg}>
              <Image src="/Heart.svg" fill={true} alt={"Phones"} />
            </div>
            <h1 className={styles.title} style={{ textAlign: "center" }}>
              We are Rita
            </h1>
          </div>
        </div>


        <div className={styles.solutionContainer}>
          <div
            className={[
              // styles.solutionHeaderContainer,
              // styles.girlHeaderContainer,
            ].join(" ")}
            // style={{ marginTop: 80 }}
          >
            <h1 className={[styles.title].join(" ")}>
              Our Story
            </h1>
            <div style={{ marginTop: 16 }} />
          </div>

          <div
            className={[
              styles.solutionHeaderContainer,
              styles.girlHeaderContainer,
            ].join(" ")}
            style={{ marginTop: 80 }}
          >
            <div style={{ marginTop: 16 }} />
            <p className={[styles.subtitle__primary, styles.about__anotherSubtitle].join(" ")}>
              Rita’s origin is a passion project. Starting from the simple
              question: “What do companies really know about us?” After going
              down a rabit hole of online research we came across a million
              assumptions and weren’t satisfied. We wanted to see it for
              ourselves. So we used the GDPR to request data from companies, and
              visualised it data in a dashboard. We were shocked, and
              immediately wanted to share it with the world!
            </p>

            <p className={[styles.subtitle__primary, styles.about__anotherSubtitle].join(" ")}>
              Rita’s origin is a passion project. Starting from the simple
              question: “What do companies really know about us?” After going
              down a rabit hole of online research we came across a million
              assumptions and weren’t satisfied. We wanted to see it for
              ourselves. So we used the GDPR to request data from companies, and
              visualised it data in a dashboard. We were shocked, and
              immediately wanted to share it with the world!
            </p>
          </div>
        </div>

        <div className={styles.wrapper}>
          <h1 className={styles.title} style={{ textAlign: "center" }}>
            Your personal information is always safe.
          </h1>
        </div>

        {/* <div style={{ marginTop: 40, marginBottom: 80 }}> */}
        {/* <FAQ /> */}
        {/* </div> */}
      </div>
    </Layout>
  );
}
