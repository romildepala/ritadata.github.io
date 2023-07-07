import Image from 'next/image';
import {useState, useEffect} from 'react';
import styles from '../../../styles/SolutionCard.module.css';

function getWindowDimensions() {
  let width = 0,
    height = 0;

  if (typeof window !== 'undefined') {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window !== 'undefined') {
      // detect window screen width function
      window.addEventListener('resize', handleResize);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const SolutionCard = ({option}) => {
  const {height, width} = useWindowDimensions();

  const [text, setText] = useState(
    'Rita’s app allows users to view, control and earn rewards from their data. In total transparency and privacy.\n',
  );

  useEffect(() => {
    if (width >= 0 && width <= 1339) {
      setText(text + '\n');
    } else {
      setText(
        'Rita’s app allows users to view, control and earn rewards from their data. In total transparency and privacy.\n',
      );
    }
  }, [width]);

  return (
    <div className={styles.container}>
      <div className={styles.badgeContainer}>
        <div className={styles.badge}>
          <span className={styles.badgeText}>
            {option === '2c' ? 'For Individuals' : null}
            {option === '2b' ? 'For Brands' : null}
          </span>
        </div>
      </div>

      <div className={styles.messageContainer}>
        <h2 className={styles.title}>
          {option === '2c' ? 'Data Empowerment for People' : null}
          {option === '2b' ? 'Data Empowerment for Brands' : null}
        </h2>
        <h3 className={styles.subtitle}>
          {option === '2c' ? text : null}
          {option === '2b'
            ? 'Rita’s platform enables trusted brands to discover & understand their customer needs by buying consented behavioural insights directly from users.'
            : null}
        </h3>
      </div>

      <div className={styles.buttonContainer}>
        <a
          className={styles.button}
          href={
            option === '2c'
              ? '/individual'
              : 'https://ritapersonaldata.com/business/index.html'
          }>
          <span className={styles.buttonText}>
            {option === '2c' ? 'Join now' : null}
            {option === '2b' ? 'Discover insights' : null}
          </span>
        </a>
      </div>

      <div className={styles.imageWrapper}>
        {option === '2c' ? (
          <div className={styles.imageContainer}>
            <Image src="/RitaApp.png" alt="Rita App" fill={true} />
          </div>
        ) : null}
        {option === '2b' ? (
          <div className={[styles.imageContainer, styles.dashboard].join(' ')}>
            <Image src="/RitaDashboard.png" alt="Rita App" fill={true} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
