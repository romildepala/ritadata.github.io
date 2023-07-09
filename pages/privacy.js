import Image from "next/image";

import styles from "../styles/B2C.module.css";
import { Layout } from "../src/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className={styles.privacymainContainer}>
        <div className={styles.privacywrapper}>
          <h1 className={styles.title} style={{ textAlign: "center" }}>
            Privacy Policy
          </h1>
          <p
            className={[
              styles.subtitle__primary,
              styles.center_subtitle,
              styles.subtitle__primary__grey,
            ].join(" ")}
          >
            We insist on making our privacy policy understandable and
            transparent.
            <br />
            Please reach out if there is anything that is lacking clarity or if
            you have suggestions.
          </p>
        </div>

        <div className={styles.privacySolutionContainer}>
          <div
            className={[
              styles.solutionHeaderContainer,
              styles.girlHeaderContainer,
            ].join(" ")}
          >
            <div style={{ marginTop: 16 }} />
            <h3 className={styles.privacySubHeader}>Protect your Privacy</h3>
            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
                styles.subtitle__primary__grey,
              ].join(" ")}
            >
              All your personal information is securely stored on our servers
              hosted on
              <br />
              Amazon Web Services (AWS) in Paris, France, using a 3-layer
              encryption
              <br />
              database. If you decide to create a Rita Account or share your
              email with us
              <br />
              for feedback, we will store your email address on our servers.
            </p>

            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
                styles.subtitle__primary__grey,
              ].join(" ")}
            >
              Rita will never:
              <li className={styles.listStyle}>
                Share personal information with third-parties without your
                consent
              </li>
              <li className={styles.listStyle}>Identify your close contacts</li>
              <li className={styles.listStyle}>
                Save personal data without your explicit consent
              </li>
              <li className={styles.listStyle}>
                Share personal data without your explicit consent
              </li>
              <li className={styles.listStyle}>
                Perform any action on your behalf other than the actions you
                request in the App (Get data, Delete data, Manage ads settings)
              </li>
            </p>
          </div>

          <div
            className={[
              styles.solutionHeaderContainer,
              styles.girlHeaderContainer,
            ].join(" ")}
          >
            <div style={{ marginTop: 16 }} />
            <h3 className={styles.privacySubHeader}>You choose</h3>
            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
                styles.subtitle__primary__grey,
              ].join(" ")}
            >
              We always give you the freedom of choice:
            </p>
            <li className={styles.listStyle}>
              Which data you connect to your account (aka. data wallet)
            </li>
            <li className={styles.listStyle}>
              Request us to remove your data from our servers anytime
            </li>
            <li className={styles.listStyle}>
              Keep your data for yourself or share it with partners to earn
              rewards
            </li>
          </div>
        </div>

        <div className={styles.privacySolutionContainer}>
          <div
            className={[
              styles.solutionHeaderContainer,
              styles.girlHeaderContainer,
            ].join(" ")}
          >
            <div style={{ marginTop: 16 }} />
            <h3 className={styles.privacySubHeader}>Privacy-by-Design</h3>
            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
                styles.subtitle__primary__grey,
              ].join(" ")}
            >
              Private is private. We genuinely care about your privacy. Rita App
              is
              <br />
              designed with maximum protection of your privacy in mind. Here is
              how:
            </p>
            <li className={styles.listStyle}>
              Your personal data is stored securely on our servers using a
              3-layer<br/>encryption database hosted on AWS in Paris, France
            </li>
            <li className={styles.listStyle}>
              Your personal data is not shared with third parties, only
              anonymous and<br/>aggregated insights are being shared if you decide
              to earn rewards
            </li>
            <li className={styles.listStyle}>
              Independent specialists were consulted for feedback on the design
              of our<br/>systems during development
            </li>
            <li className={styles.listStyle}>
              The personal data you collect is fully encrypted, using AES-256
              standards
            </li>
            <li className={styles.listStyle}>
              The principles of Privacy by Design were consulted when developing
              the App and making architectural choices
            </li>
          </div>

          <div
            className={[
              styles.solutionHeaderContainer,
              styles.girlHeaderContainer,
            ].join(" ")}
          >
            <div style={{ marginTop: 16 }} />
            <h3 className={styles.privacySubHeader}>
              Why we collect your data & what data we collect
            </h3>
            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
                styles.subtitle__primary__grey,
              ].join(" ")}
            >
              By default, we store your login credentials, email, and password
              (encrypted), and the date and time you create your account on our
              servers. Once you choose to request your data from a third-party
              service, the data is encrypted, processed, and stored on our
              servers. Here is an overview of when we store your data on our
              servers and for which purpose:
            </p>
            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
                styles.subtitle__primary__grey,
              ].join(" ")}
            >
              Account creation:
              <li className={styles.listStyle}>Data type: Email Address</li>
              <li className={styles.listStyle}>
                Purpose: Needed to protect your data and log you into your
                account
              </li>
            </p>

            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
                styles.subtitle__primary__grey,
              ].join(" ")}
            >
              Control data feature:
              <li className={styles.listStyle}>
                Data type: Email Address, Online Interactions
              </li>
              <li className={styles.listStyle}>
                Purpose: This information is required to send out Right to be
                Forgotten requests on your behalf if you request companies to
                delete your data
              </li>
            </p>
          </div>
        </div>

        <div className={styles.privacySolutionContainer}>
          <div
            className={[
              styles.solutionHeaderContainer,
              styles.girlHeaderContainer,
            ].join(" ")}
          >
            <div style={{ marginTop: 16 }} />
            <h3 className={styles.privacySubHeader}>Protect your Privacy</h3>
            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
                styles.subtitle__primary__grey,
              ].join(" ")}
            >
              All your personal information is securely stored on our servers
              hosted on
              <br />
              Amazon Web Services (AWS) in Paris, France, using a 3-layer
              encryption
              <br />
              database. If you decide to create a Rita Account or share your
              email with us
              <br />
              for feedback, we will store your email address on our servers.
            </p>

            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
                styles.subtitle__primary__grey,
              ].join(" ")}
            >
              Rita will never:
              <li className={styles.listStyle}>
                Share personal information with third-parties without your
                consent
              </li>
              <li className={styles.listStyle}>Identify your close contacts</li>
              <li className={styles.listStyle}>
                Save personal data without your explicit consent
              </li>
              <li className={styles.listStyle}>
                Share personal data without your explicit consent
              </li>
              <li className={styles.listStyle}>
                Perform any action on your behalf other than the actions you<br/>
                request in the App (Get data, Delete data, Manage ads settings)
              </li>
            </p>
          </div>

          <div
            className={[
              styles.solutionHeaderContainer,
              styles.girlHeaderContainer,
            ].join(" ")}
          >
            <div style={{ marginTop: 16 }} />
            <h3 className={styles.privacySubHeader}>You choose</h3>
            <p
              className={[
                styles.subtitle__primary,
                styles.about__anotherSubtitle,
                styles.subtitle__primary__grey,
              ].join(" ")}
            >
              We always give you the freedom of choice:
            </p>
            <li className={styles.listStyle}>
              Which data you connect to your account (aka. data wallet)
            </li>
            <li className={styles.listStyle}>
              Request us to remove your data from our servers anytime
            </li>
            <li className={styles.listStyle}>
              Keep your data for yourself or share it with partners to earn
              rewards
            </li>
          </div>
        </div>
      </div>
    </Layout>
  );
}
