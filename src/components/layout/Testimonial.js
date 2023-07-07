import {useEffect} from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import styles from '../../../styles/Testimonial.module.css';

const people = [
  {
    name: 'Maria',
    profession: 'Designer',
    description:
      "Rita showed me where my data is! People don't know that Google and Facebook are just harvesters of data, there are many more  companies that have it. Seeing my data and who has it was very educational.",
    imgPath: '/Maria.png',
  },
  {
    name: 'Rakshit',
    profession: 'Sofware Developer',
    description:
      "Rita showed me where my data is! People don't know that Google and Facebook are just harvesters of data, there are many more  companies that have it. Seeing my data and who has it was very educational.",
    imgPath: '/Rakshit.png',
  },
  {
    name: 'Donald',
    profession: 'Consultant',
    description:
      'Love the Team. They support us in and instant and always responsive. Best business choice.',
    imgPath: '/Donald.png',
  },
  {
    name: 'Julia',
    profession: 'Chief Operating Officer',
    description: 'Changed the way we look at data in our business.',
    imgPath: '/Julia.png',
  },
];

export const Testimonial = (props) => {
  const [emblaRef, embla] = useEmblaCarousel({loop: true}, [
    Autoplay({delay: 3000}),
  ]);

  useEffect(() => {
    if (embla) {
      embla.on((event) => {
        console.log(event);
      });
    }
  }, [embla]);

  return (
    <div style={{overflow: 'hidden'}} ref={emblaRef}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        {people.map((person, i) => (
          <div key={i} className={styles.carouselContainer}>
            <div className={styles.cardContainer}>
              <p>{person.description}</p>
            </div>

            <div>
              <div className={styles.arrowDown} />
              <div className={styles.userContainer}>
                <div className={styles.userImage}>
                  <Image src={person.imgPath} fill={true} alt="user" />
                </div>

                <div className={styles.userName}>
                  <h4>{person.name}</h4>
                  <h5>{person.profession}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
