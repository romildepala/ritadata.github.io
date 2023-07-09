import Image from "next/image";

import styles from "../styles/B2C.module.css";
import { Layout } from "../src/components/layout/Layout";
import { IndustyLeadersCard } from "../src/components/layout/IndustryLeadersCard";
import { TeamsCard } from "../src/components/layout/TeamsCard";

export default function About() {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.aboutHeaderContainer}>
          <div className={styles.someContainer}>
            <h1
              className={[styles.about__title, styles.anotherTitle].join(" ")}
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

          <div className={styles.cardsContainerSecondary}>
            <div className={styles.cardSecondary}>
              <TeamsCard
                name="Shena"
                role="Founder"
                profile={<Image src="/schena.png" fill={true} />}
              />
            </div>
            <div className={styles.cardSecondary}>
              <TeamsCard
                name="John"
                role="Founder"
                profile={<Image src="/john.png" fill={true} />}
              />
            </div>
            <div className={styles.cardSecondary}>
              <TeamsCard
                name="Kuka"
                role="Developer"
                profile={<Image src="/kuka.png" fill={true} />}
              />
            </div>
            <div className={styles.cardSecondary}>
              <TeamsCard
                name="Anderson"
                role="Developer"
                profile={<Image src="/anderson.png" fill={true} />}
              />
            </div>
            <div className={styles.cardSecondary}>
              <TeamsCard
                name="Army"
                role="Developer"
                profile={<Image src="/army.png" fill={true} />}
              />
            </div>
            <div className={styles.cardSecondary}>
              <TeamsCard
                name="Ario"
                role="Designer"
                profile={<Image src="/ario.png" fill={true} />}
              />
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <h1 className={styles.about__title} style={{ textAlign: "center" }}>
            Backed by industry leaders
          </h1>

          <div className={styles.cardsContainerSecondary}>
            <a
              href="https://www.linkedin.com/in/royvella/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IndustyLeadersCard
                name="Roy Vella"
                role="Chairman & Advisor"
                profile={<Image src="/roy.jfif" fill={true} />}
              />
            </a>
            <div className={styles.cardSecondary}>
              <a
                href="https://www.linkedin.com/in/dimitrisirota/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IndustyLeadersCard
                  name="Dimitri Sirota"
                  role="Strategic Advisor"
                  profile={<Image src="/dimitri.jfif" fill={true} />}
                />
              </a>
            </div>
            <div className={styles.cardSecondary}>
              <a
                href="https://www.linkedin.com/in/privacyguru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IndustyLeadersCard
                  name="Debra Farber"
                  role="Strategic Advisor"
                  profile={<Image src="/debra.jfif" fill={true} />}
                />
              </a>
            </div>
            <div className={styles.cardSecondary}>
              <a
                href="https://www.linkedin.com/in/jeffnienaber/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IndustyLeadersCard
                  name="Jeff Nienaber"
                  role="Strategic Advisor"
                  profile={<Image src="/jeff.jfif" fill={true} />}
                />
              </a>
            </div>
            <div className={styles.cardSecondary}>
              <a
                href="https://www.linkedin.com/in/viivilahteenoja/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IndustyLeadersCard
                  name="Viivi Lähteenoja"
                  role="Strategic Advisor"
                  profile={<Image src="/viivi.jfif" fill={true} />}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.solutionContainer}>
          <div className={[].join(" ")}>
            <h1 className={[styles.about__title].join(" ")}>Our Story</h1>
            <div style={{ marginTop: 16 }} />
          </div>

          <div
            className={[
              styles.solutionHeaderContainer,
              styles.girlHeaderContainer,
            ].join(" ")}
          >
            <div style={{ marginTop: 16 }} />
            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
                styles.subtitle__primary__grey,
              ].join(" ")}
            >
              Rita’s origin is a passion project. Starting from the simple
              question: “What do companies really know about us?” After going
              down a rabit hole of online research we came across a million
              assumptions and weren’t satisfied. We wanted to see it for
              ourselves. So we used the GDPR to request data from companies, and
              visualised it data in a dashboard. We were shocked, and
              immediately wanted to share it with the world!
            </p>

            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
              ].join(" ")}
            >
              Since, we’ve evolved into a central place where users can view,
              understand and also control their data. We believe that everyone
              should be able to do this in a few simple steps. Our aim is to
              make data work for everyone, by democratising the data lanscape.
            </p>

            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
              ].join(" ")}
            >
              Rita’s role is to hand you the keys to your data. Once you’ve been
              handed the keys, it’s up to you to manage this powerful resource.
              With great power comes great responsibility… But don’t worry, we
              are here to guide you along the way!
            </p>
          </div>
        </div>

        {/* <div style={{ marginTop: 40, marginBottom: 80 }}> */}
        {/* <FAQ /> */}
        {/* </div> */}
      </div>
    </Layout>
  );
}
