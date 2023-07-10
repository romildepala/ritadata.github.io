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
            <div style={{ marginTop: 8 }} />
            We insist on making our privacy policy understandable and
            transparent.
            <br />
            Please reach out if there is anything that is lacking clarity or if
            you have suggestions.
          </p>
        </div>

        <div className={styles.privacySolutionContainer}>
          <div style={{ borderBottom: "1px solid #CACCC7", paddingBottom: 32 }}>
            <div style={{ marginTop: 16 }} />
            <h3 className={styles.privacySubHeader}>
              Privacy Policy for Rita Personal Data
            </h3>
            <p
              className={[
                styles.privacy__subtitle__primary,
                styles.about__anotherSubtitle,
                styles.subtitle__primary__grey,
              ].join(" ")}
            >
              At Rita Data B.V., accessible at Ritapersonaldata.com, our main
              priority is the privacy of our visitors. We do not use any
              trackers or cookies, and this Privacy Policy document outlines the
              types of information collected and recorded by Rita Personal Data,
              how we use it, and why. Our mission at Rita is to put you in
              control of your personal data.
            </p>
          </div>

          <div className={styles.section__container}>
            <div className={styles.section__wrapper}>
              <div className={styles.section__left}>
                <h3 className={styles.privacySubHeader}>
                  Protect your Privacy
                </h3>
                <p
                  className={[
                    styles.privacy__subtitle__primary,
                    styles.about__anotherSubtitle,
                    styles.subtitle__primary__grey,
                  ].join(" ")}
                >
                  All your personal information is securely stored on our
                  servers hosted on Amazon Web Services (AWS) in Paris, France,
                  using a 3-layer encryption database. If you decide to create a
                  Rita Account or share your email with us for feedback, we will
                  store your email address on our servers.
                  <br />
                </p>
                Rita will never:
                <li className={styles.listStyle}>
                  Share personal information with third-parties without your
                  consent
                </li>
                <li className={styles.listStyle}>
                  Save personal data without your explicit consent
                </li>
                <li className={styles.listStyle}>
                  Perform any action on your behalf other than the actions you
                  request in the App (Get data, Delete data, Manage ads
                  settings)
                </li>
              </div>

              <div className={styles.section__right}>
                <h3 className={styles.privacySubHeader}>You choose</h3>
                <p>We always give you the freedom of choice:</p>
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

          <div className={styles.section__container}>
            <div className={styles.section__wrapper}>
              <div className={styles.section__left}>
                <h3 className={styles.privacySubHeader}>Privacy-by-Design</h3>
                <p
                  className={[
                    styles.privacy__subtitle__primary,
                    styles.about__anotherSubtitle,
                    styles.subtitle__primary__grey,
                  ].join(" ")}
                >
                  Private is private. We genuinely care about your privacy. Rita
                  App is designed with maximum protection of your privacy in
                  mind. Here is how:
                  <br />
                </p>
                <li className={styles.listStyle}>
                  Your personal data is stored securely on our servers using a
                  3-layer encryption database hosted on AWS in Paris, France
                </li>
                <li className={styles.listStyle}>
                  Your personal data is not shared with third parties, only
                  anonymous and aggregated insights are being shared if you
                  decide to earn rewards
                </li>
                <li className={styles.listStyle}>
                  Independent specialists were consulted for feedback on the
                  design of our systems during development
                </li>
                <li className={styles.listStyle}>
                  The personal data you collect is fully encrypted, using
                  AES-256 standards
                </li>
                <li className={styles.listStyle}>
                  The principles of Privacy by Design were consulted when
                  developing the App and making architectural choices
                </li>
              </div>

              <div className={styles.section__right}>
                <h3 className={styles.privacySubHeader}>
                  Why we collect your data & what data we collect
                </h3>
                <p
                  className={[
                    styles.privacy__subtitle__primary,
                    styles.about__anotherSubtitle,
                    styles.subtitle__primary__grey,
                  ].join(" ")}
                >
                  By default, we store your login credentials, email, and
                  password (encrypted), and the date and time you create your
                  account on our servers. Once you choose to request your data
                  from a third-party service, the data is encrypted, processed,
                  and stored on our servers. Here is an overview of when we
                  store your data on our servers and for which purpose:
                  <br />
                </p>
                <p style={{ margin: 0 }}>Account creation:</p>
                <li className={styles.listStyle}>Data type: Email Address</li>
                <li className={styles.listStyle}>
                  Purpose: Needed to protect your data and log you into your
                  account
                </li>

                <p style={{ margin: 0 }}>Control data feature:</p>
                <li className={styles.listStyle}>
                  Data type: Email Address, Online Interactions
                </li>
                <li className={styles.listStyle}>
                  Purpose: This information is required to send out Right to be
                  Forgotten requests on your behalf if you request companies to
                  delete your data
                </li>
              </div>
            </div>
          </div>

          <div className={styles.section__container}>
            <div className={styles.section__wrapper}>
              <div className={styles.section__left}>
                <h3 className={styles.privacySubHeader}>
                  General Data Protection Regulation (GDPR)
                </h3>
                <p
                  className={[
                    styles.privacy__subtitle__primary,
                    styles.about__anotherSubtitle,
                    styles.subtitle__primary__grey,
                  ].join(" ")}
                >
                  According to the GDPR, Rita is the “Data Controller” of your
                  information. We have predefined how your data is processed,
                  making us legally hold such status. The personal data you
                  collect from “sources” does not leave our servers without your
                  explicit consent. We store your login credentials, email, and
                  password (encrypted), and the date and time you create your
                  account. If you want us to remove your email address and
                  delete your account, this can be done through the app in the
                  “Profile” tab or by contacting us at
                  info@ritapersonaldata.com. We will do this right away. In
                  certain circumstances, you have the following data protection
                  rights:
                  <br />
                </p>
                Rita will never:
                <li className={styles.listStyle}>The right to access</li>
                <li className={styles.listStyle}>The right to erasure</li>
                <li className={styles.listStyle}>The right of rectification</li>
                <li className={styles.listStyle}>The right to object</li>
                <li className={styles.listStyle}>The right of restriction</li>
                <li className={styles.listStyle}>
                  The right to data portability
                </li>
                <li className={styles.listStyle}>
                  The right to withdraw consent
                </li>{" "}
                <br />
                <p
                  className={[
                    styles.privacy__subtitle__primary,
                    styles.about__anotherSubtitle,
                    styles.subtitle__primary__grey,
                  ].join(" ")}
                >
                  With complaints about our privacy practices, you can reach out
                  to the data protection authorities
                  (www.autoriteitpersoonsgegevens.nl). Please reach out to us
                  first; we are accessible and always eager to hear about any
                  concerns to improve.
                </p>
              </div>

              <div className={styles.section__right}>
                <h3 className={styles.privacySubHeader}></h3>
                <p style={{ margin: 0 }}>Earn Rewards:</p>
                <li className={styles.listStyle}>
                  Data type: Aggregated Online Interaction Data from third-party
                  services connected to Rita. For example, 2000 people have
                  looked for red cars this week.
                </li>
                <li className={styles.listStyle}>
                  Purpose: If you choose to share insights with Rita Trusted
                  Partners or rewards, we aggregate data from users and turn it
                  into customer insights. (e.g For example, 2000 people have
                  looked for red cars this week) This increases the value of
                  your data while ensuring we do not sharing personal or
                  invasive data.
                </li>
                <li className={styles.listStyle}>
                  <strong>Important Note:</strong> Data sharing with Rita
                  Partner Brands is always anonymous unless you explicitly
                  choose to share your personal information.
                </li>

                <p>Cash-out Rewards feature:</p>
                <li className={styles.listStyle}>
                  Data type: Email, Full name and Stripe ID (Payment Partner)
                </li>
                <li className={styles.listStyle}>
                  Purpose: When you cash in your rewards, we send you the
                  rewards through Stripe
                </li>
                <br />
                <br />
                <p
                  className={[
                    styles.privacy__subtitle__primary,
                    styles.about__anotherSubtitle,
                    styles.subtitle__primary__grey,
                  ].join(" ")}
                >
                  Request data removal at any time, and we will delete
                  everything within 30 days. Send an email to:
                  info@ritapersonaldata.com
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section__container}>
            <div className={styles.section__wrapper}>
              <div className={styles.section__left}>
                <h3 className={styles.privacySubHeader}>
                  Third-party processing of your data
                </h3>
                <p
                  className={[
                    styles.privacy__subtitle__primary,
                    styles.about__anotherSubtitle,
                    styles.subtitle__primary__grey,
                  ].join(" ")}
                >
                  Rita securely stores your data on a Postgres server provided
                  by AWS, located in AWS “Euro data center hub” Paris, France.
                </p>
                <p
                  className={[
                    styles.privacy__subtitle__primary,
                    styles.about__anotherSubtitle,
                    styles.subtitle__primary__grey,
                  ].join(" ")}
                >
                  We use Stripe Payments Europe, Limited for sending rewards and
                  Sendinblue for sending emails. Therefore, we need to share
                  your email address with these companies.
                </p>
                <p
                  className={[
                    styles.privacy__subtitle__primary,
                    styles.about__anotherSubtitle,
                    styles.subtitle__primary__grey,
                  ].join(" ")}
                >
                  To optimize our Mobile App, we collect data about crashes and
                  interactions - we use Mixpanel and Firebase to track these.
                </p>
              </div>

              <div className={styles.section__right}>
                <h3 className={styles.privacySubHeader}>How to contact us</h3>
                <p
                  className={[
                    styles.privacy__subtitle__primary,
                    styles.about__anotherSubtitle,
                    styles.subtitle__primary__grey,
                  ].join(" ")}
                >
                  If you have any questions about Rita’s privacy policy, the
                  data we hold on you or would exercise one of your data
                  protection rights, please do not hesitate to contact us.
                </p>
                <p
                  className={[
                    styles.privacy__subtitle__primary,
                    styles.about__anotherSubtitle,
                    styles.subtitle__primary__grey,
                  ].join(" ")}
                >
                  info@ritapersonaldata.com
                  <br />
                  Rita Data B.V.
                  <br />
                  Phone: +32495387902
                  <br />
                  Address: Jacob Van Lennepkade 21H, 1054ZE Amsterdam, The
                  Netherlands
                  <br />
                  Kvk nr: 85293776
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40 }} />
    </Layout>
  );
}
