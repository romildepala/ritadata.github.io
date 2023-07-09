import {useRouter} from 'next/router';
import styles from '../../../styles/Footer.module.css';

import {RitaLogoSvg} from '../../../public/icons/RitaLogoSvg';
import {InstagramSvg} from '../../../public/icons/InstagramSvg';
import {TwitterSvg} from '../../../public/icons/TwitterSvg';
import {LinkedinSvg} from '../../../public/icons/LinkedinSvg';

import {DownloadRitaButton} from './DownloadRitaButton';
export const Footer = (props) => {
  const router = useRouter();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.desktopGrid}>
        <div className={styles.grid}>
          <div
            className={[styles.column, styles.columnDesktop].join(' ')}
            id={'hello'}>
            <a
              className={styles.a}
              onClick={() => {
                router.push('/business/index.html');
              }}>
              Business Solution
            </a>
            <a
              className={styles.a}
              onClick={() => {
                router.push('/individual#howitworks');
              }}>
              How it works?
            </a>
            <a
              className={styles.a}
              onClick={() => {
                router.push('/about');
              }}>
              About us
            </a>
            <a
              className={styles.a}
              onClick={() => {
                router.push('/individual#faq');
              }}>
              FAQ
            </a>
          </div>

          <div className={styles.column}>
            <a
              className={styles.a}
              onClick={() => {
                router.push('/privacy/privacypolicy.html');
              }}>
              Terms of privacy
            </a>
            <a
              className={styles.a}
              href="mailto: g.schenardi@ritapersonaldata.com">
              Contact us
            </a>
            <a
              className={styles.a}
              target="_blank"
              href="https://ritapersonaldata.medium.com/">
              Blog
            </a>
            <a className={styles.ala}></a>
          </div>

          <div className={styles.column1}></div>
        </div>

        <div className={styles.separatorContainer}>
          <div className={styles.separatorLine}></div>
        </div>

        <div className={styles.innerContainer}>
          <div className={styles.ritaLogoContainer}>
            <div className={styles.logoAndPhrase}>
              <RitaLogoSvg color={'#FFFFFF'} />
              <div className={styles.phrase}>
                <p className={styles.p}>Your data, in your pocket.</p>
              </div>
            </div>

            <DownloadRitaButton color={'white'} />
          </div>

          <div className={styles.socialsContainer}>
            <a
              className={styles.socialIcon}
              href={'https://www.instagram.com/rita_personal_data/?hl=en'}
              target={'_blank'}>
              <div className={styles.socialInnerContainer}>
                <InstagramSvg />
              </div>
            </a>
            <a
              className={styles.socialIcon}
              style={{margin: '0px 32px'}}
              href={'https://twitter.com/data_rita?lang=en'}
              target={'_blank'}>
              <div className={styles.socialInnerContainer}>
                <TwitterSvg />
              </div>
            </a>
            <a
              className={styles.socialIcon}
              href={'https://www.linkedin.com/company/ritapersonaldata/'}
              target={'_blank'}>
              <div className={styles.socialInnerContainer}>
                <LinkedinSvg />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.separatorContainerDesktop}>
        <div className={styles.separatorLine}></div>
      </div>

      <div className={styles.copyright}>
        <p className={styles.p}>
          © Rita Personal Data Holdings B.V. 2023 • Joop Geesinkweg 901, 1114
          AB, Amsterdam, Netherlands
        </p>
      </div>
    </div>
  );
};
