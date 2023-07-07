import Image from 'next/image';

import styles from '../styles/B2C.module.css';
import {DownloadRitaButton} from '../src/components/layout/DownloadRitaButton';
import {Layout} from '../src/components/layout/Layout';
import {Testimonial} from '../src/components/layout/Testimonial';
import {RitaShowcase} from '../src/components/layout/RitaShowcase';
import {CharacteristicsCard} from '../src/components/layout/CharacteristicsCard';
import {FAQ} from '../src/components/layout/FAQ';

export default function Home() {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.someContainer}>
            <h1 className={[styles.title, styles.anotherTitle].join(' ')}>
              Your data, in your pocket
            </h1>
            <div style={{marginTop: 16}} />
            <h3 className={[styles.subtitle, styles.leftSubtitle].join(' ')}>
              Rita’s app allows users to view, control and earn rewards from
              their data. In total transparency and privacy.
            </h3>
            <div className={styles.downloadRitaButton}>
              <DownloadRitaButton color={'white'} backgroundColor={'#037B55'} />
            </div>
          </div>

          <div className={styles.phoneContainer}>
            <div className={styles.phones}>
              <Image src="/Phones.png" fill={true} alt={'Phones'} />
            </div>
          </div>
        </div>

        <div className={styles.innerContainer}>
          <h1 className={styles.title} style={{textAlign: 'center'}}>
            120,000 Members
          </h1>
          <div style={{marginTop: 16}} />
          <h3 className={styles.subtitle} style={{textAlign: 'center'}}>
            Rita changes the way you Interact and control your data. and It’s
            not just us saying it.
          </h3>
        </div>

        <div
          style={{
            marginTop: 80,
          }}>
          <Testimonial />
        </div>

        <div className={styles.solutionContainer}>
          <div
            className={styles.solutionHeaderContainer}
            style={{marginTop: 80}}>
            <h1
              className={[styles.title, styles.anotherProblemTitle].join(' ')}>
              Your data is being used and exploited every day.
            </h1>
            <div style={{marginTop: 40}}>
              <h4 className={styles.h4title}>
                Your data is worth on avg. 247 euros
              </h4>
              <div style={{marginTop: 8}} />
              <h5
                className={[styles.subtitle, styles.anotherSubtitle].join(' ')}>
                Your data is being sold and monetised on daily basis.
              </h5>
            </div>
          </div>
          <div className={styles.img1}>
            <Image
              src="/UserExploitedVertical.png"
              fill={true}
              alt="User exploited"
            />
          </div>
          <div className={styles.horizontalImage}>
            <Image
              src="/UserExploitedHorizontal.png"
              fill={true}
              alt="User exploited"
            />
          </div>
        </div>

        <div className={styles.solutionContainer}>
          <div
            className={[
              styles.solutionHeaderContainer,
              styles.girlHeaderContainer,
            ].join(' ')}
            style={{marginTop: 80}}>
            <h1
              className={[styles.title, styles.anotherProblemTitle].join(' ')}>
              Control & profit from your data.
            </h1>
            <div style={{marginTop: 16}} />
            <h3 className={[styles.subtitle, styles.anotherSubtitle].join(' ')}>
              Rita app is your personal data guru. View, control and earn from
              your data.
            </h3>
          </div>
          <div className={styles.img1} style={{height: '110vw'}}>
            <Image
              src="/UserControlsVertical.png"
              fill={true}
              alt="User controls"
            />
          </div>

          <div className={[styles.horizontalImage, styles.girlImage].join(' ')}>
            <Image
              src="/UserControlsHorizontal.png"
              fill={true}
              alt="User controls"
            />
          </div>
        </div>

        <div className={styles.wrapper} id="howitworks">
          <h1 className={styles.title} style={{textAlign: 'center'}}>
            How does Rita work?
          </h1>
        </div>

        <div style={{marginTop: 30}}>
          <RitaShowcase />
        </div>

        <div className={styles.wrapper}>
          <h1 className={styles.title} style={{textAlign: 'center'}}>
            Your personal information is always safe.
          </h1>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <CharacteristicsCard option={'gdpr'} />
          </div>
          <div className={styles.card}>
            <CharacteristicsCard option={'gdpr'} />
          </div>
          <div className={styles.card}>
            <CharacteristicsCard option={'gdpr'} />
          </div>
          <div className={[styles.card, styles.card2].join(' ')}>
            <CharacteristicsCard option={'gdpr'} />
          </div>
          <div className={[styles.card, styles.card2].join(' ')}>
            <CharacteristicsCard option={'gdpr'} />
          </div>
        </div>

        <div className={styles.wrapper} id="faq">
          <h1 className={styles.title} style={{textAlign: 'center'}}>
            FAQ
          </h1>
          <div style={{marginTop: 16}} />
          <h3 className={styles.subtitle} style={{textAlign: 'center'}}>
            We know your data is a very sensitive issue. That is why we prepared
            a list of most commonly asked questions
          </h3>
        </div>

        <div style={{marginTop: 40, marginBottom: 80}}>
          <FAQ />
        </div>
      </div>
    </Layout>
  );
}
