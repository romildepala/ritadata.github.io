import {useEffect, useState} from 'react';
import Image from 'next/image';
import styles from '../../../styles/RitaShowcase.module.css';

const states = [
  {
    order: 1,
    title: 'View',
    subtitle: 'Request your data form companies in a few minutes.',
    imgPath: '/app/View.png',
  },
  {
    order: 2,
    title: 'Control',
    subtitle: 'Discover and track your personal data dashboards.',
    imgPath: '/app/Control.png',
  },
  {
    order: 3,
    title: 'Earn',
    subtitle:
      'Share insights from your data with brands you love and earn rewards.',
    imgPath: '/app/Earn.png',
  },
];

export const RitaShowcase = (props) => {
  const [hightlightedCard, setHighlightedCard] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHighlightedCard((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        {states.map((state) => (
          <>
            <div className={styles.numericalBox}>
              <span className={styles.numberText}>{state.order}</span>
            </div>
            <div className={styles.textContainer}>
              <span className={styles.title}>{state.title}</span>
              <span className={styles.subtitle}>{state.subtitle}</span>
            </div>
            <div className={styles.imgContainer}>
              <div className={styles.appImg}>
                <Image src={state.imgPath} fill={true} alt={state.title} />
              </div>
            </div>
          </>
        ))}
      </div>

      <div className={styles.horizontalContainer}>
        <div className={styles.cardAlignment}>
          {/*  */}
          <div
            className={styles.cardContainer}
            style={hightlightedCard === 0 ? {backgroundColor: '#037B55'} : null}
            onClick={() => {
              setHighlightedCard(0);
            }}>
            <div
              className={styles.numericalBox}
              style={
                hightlightedCard === 0 ? {backgroundColor: '#037B55'} : null
              }>
              <span
                className={styles.numberText}
                style={hightlightedCard === 0 ? {color: 'white'} : null}>
                1
              </span>
            </div>
            <div className={styles.textContainer}>
              <span
                className={styles.title}
                style={hightlightedCard === 0 ? {color: 'white'} : null}>
                View
              </span>
              <span
                className={styles.subtitle}
                style={hightlightedCard === 0 ? {color: 'white'} : null}>
                Request your data form companies in a few minutes.
              </span>
            </div>
          </div>

          <div
            className={styles.cardContainer}
            style={hightlightedCard === 1 ? {backgroundColor: '#037B55'} : null}
            onClick={() => {
              setHighlightedCard(1);
            }}>
            <div
              className={styles.numericalBox}
              style={
                hightlightedCard === 1 ? {backgroundColor: '#037B55'} : null
              }>
              <span
                className={styles.numberText}
                style={hightlightedCard === 1 ? {color: 'white'} : null}>
                2
              </span>
            </div>
            <div className={styles.textContainer}>
              <span
                className={styles.title}
                style={hightlightedCard === 1 ? {color: 'white'} : null}>
                Control
              </span>
              <span
                className={styles.subtitle}
                style={hightlightedCard === 1 ? {color: 'white'} : null}>
                Discover and track your personal data dashboards.
              </span>
            </div>
          </div>

          <div
            className={styles.cardContainer}
            style={
              hightlightedCard === 2
                ? {backgroundColor: '#037B55', width: '100%', marginTop: 24}
                : {width: '100%', marginTop: 24}
            }
            onClick={() => {
              setHighlightedCard(2);
            }}>
            <div
              className={styles.numericalBox}
              style={
                hightlightedCard === 2 ? {backgroundColor: '#037B55'} : null
              }>
              <span
                className={styles.numberText}
                style={hightlightedCard === 2 ? {color: 'white'} : null}>
                3
              </span>
            </div>
            <div className={styles.textContainer}>
              <span
                className={styles.title}
                style={hightlightedCard === 2 ? {color: 'white'} : null}>
                Earn
              </span>
              <span
                className={styles.subtitle}
                style={hightlightedCard === 2 ? {color: 'white'} : null}>
                Share insights from your data with brands you love and earn
                rewards.
              </span>
            </div>
          </div>

          {/*  */}
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.appImg}>
            {hightlightedCard === 0 ? (
              <Image src={'/app/View.png'} fill={true} alt={'View'} />
            ) : null}
            {hightlightedCard === 1 ? (
              <Image src={'/app/Control.png'} fill={true} alt={'View'} />
            ) : null}
            {hightlightedCard === 2 ? (
              <Image src={'/app/Earn.png'} fill={true} alt={'View'} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
