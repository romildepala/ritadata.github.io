import {useState} from 'react';
import styles from '../../../styles/FAQ.module.css';

import {ChevronDownSvg} from '../../../public/icons/ChevronDownSvg';
import {ChevronUpSvg} from '../../../public/icons/ChevronUpSvg';
const options = [
  {
    question: 'Is my data safe with Rita?',
    answer: [
      'Without your trust our business can’t exist, therefore we go beyond legal and security standards to make sure your data is safe. By default, all your data is securely stored and encrypted on your mobile device so you remain in control.\n Our privacy infrastructure was built using privacy-by-design and follows the standards of the ',
      <a
        href="https://theodi.org/wp-content/uploads/2019/07/ODI-Data-Ethics-Canvas-2019-05.pdf"
        target={'_blank'}
        rel="noopener noreferrer"
        style={{color: '#06FFA5', textDecoration: 'underline'}}>
        Data Ethics Canvas
      </a>,
      ' and ',
      <a
        href="https://www.mydata.org/participate/declaration/"
        target={'_blank'}
        rel="noopener noreferrer"
        style={{color: '#06FFA5', textDecoration: 'underline'}}>
        MyData Principles
      </a>,
      '. Our world-class privacy and security advisors, support us in maintaining the latest standards.',
    ],
  },
  {
    question: 'What data does Rita Store?',
    answer: [
      'By default, we only store your login credentials, email, and password (encrypted), and the date and time you create your account. These credentials are needed to log you into the app and send rewards. All other data is stored on your mobile device unless you explicitly choose otherwise. \n\n If you decide to share insights with our partner brands for rewards, your data is stored on our privacy-first infrastructure on AWS. This is required to clean and elaborate your data. The insights we share then with brands are on an aggregated level. E.g. 2000 people looked for red cars this week. Feel free to reach out if you want to know more about our privacy technologies at ',
      <a
        href="mailto:g.schenardi@ritapersonaldata.com"
        style={{color: '#06FFA5', textDecoration: 'underline'}}>
        g.schenardi@ritapersonaldata.com
      </a>,
      '. We are always happy to explain more over a chat!',
    ],
  },
  {
    question: 'How does Rita make money?',
    answer:
      'We only make money when you earn rewards. If you decide to share insights from your data with our partner brands, we ask them for a 10% fee on the reward given to you. E.g. if a brand offers you 4 euros for insights about your data, and you accept, we will ask them for 0.4 euros as a fee.',
  },
  {
    question:
      'If I share my data with Rita Partners, what data is being shared?',
    answer: [
      'If you decide to share insights with our Partner Brands for rewards, we first aggregate users like you to make your data non-personal and then optimize the value for brands. By doing this we increase the value of your rewards and make sure we don’t share invasive data.\n\nThe insights shared with brands on an aggregated level are, for example, 2000 people have looked for red cars this week. Such insights are derived from the data sources you connect to in the app, and what you see in your dashboards.\n\nThe insights you share are used by brands to better understand customer needs and improve their products. We present them with insights dashboards such as customer journeys, market shares, and brand awareness. We don’t share your name, date of birth, email address, or other personal information. To learn more please have a look at our, ',
      <a
        href="https://ritapersonaldata.com/business/index.html"
        target={'_blank'}
        rel="noopener noreferrer"
        style={{color: '#06FFA5', textDecoration: 'underline'}}>
        Brand website.
      </a>,
    ],
  },
  {
    question: 'Who owns Rita?',
    answer:
      'Rita Personal Data Holdings B.V. is an independent private company. The company is privately owned by its founders (John Arts and Guglielmo Schenardi) and pre-seed investors. Investors include Pitchdrive VC and leaders from the Data, Privacy, and fintech space such as Felix Van de Maele, Stijn (Stan) Christiaens, and Hristo Borisov.',
  },
];

export const FAQ = () => {
  return (
    <div className={styles.mainContainer}>
      {options.map((option, i) => {
        const [isExpanded, setIsExpanded] = useState(false);
        return (
          <div
            className={styles.rowContainer}
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            key={i}>
            <div className={styles.rowHead}>
              <h5 className={styles.title}>{option.question}</h5>

              <div
                className={styles.unexpandedBox}
                style={{
                  backgroundColor: !isExpanded ? 'transparent' : 'white',
                }}>
                {isExpanded ? <ChevronUpSvg /> : <ChevronDownSvg />}
              </div>
            </div>
            {isExpanded ? (
              <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>{option.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
