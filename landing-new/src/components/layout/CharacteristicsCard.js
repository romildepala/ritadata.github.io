import {useState, useEffect} from 'react';
import styles from '../../../styles/CharacteristicsCard.module.css';

import {EyeSvg} from '../../../public/icons/EyeSvg';
import {ShieldCheckSvg} from '../../../public/icons/ShieldCheckSvg';
import {LockSvg} from '../../../public/icons/LockSvg';
export const CharacteristicsCard = ({option}) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (option === 'privacy-first') setColor('rgba(255, 99, 34, 0.16)');
    if (option === 'data-wallet') setColor('rgba(31, 116, 254, 0.16)');
    if (option === 'privacy-pipelines') setColor('rgba(45, 168, 130, 0.16)');;
  }, [option]);

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer} style={{backgroundColor: color}}>
        {option === 'privacy-first' ? <EyeSvg /> : null}
        {option === 'data-wallet' ? <LockSvg /> : null}
        {option === 'privacy-pipelines' ? <ShieldCheckSvg /> : null}
      </div>
      <p className={styles.title}>
        {option === 'privacy-first' ? 'Privacy-first' : null}
        {option === 'data-wallet' ? 'Data Wallet' : null}
        {option === 'privacy-pipelines' ? 'Privacy-pipelines' : null}
      </p>
      <p className={styles.subtitle}>
        {option === 'privacy-first'
          ? `We don't reveal your personal data to any third parties without your consent`
          : null}
        {option === 'data-wallet'
          ? `Your personal data is securely stored in your data wallet.`
          : null}
        {option === 'privacy-pipelines'
          ? `Our "Privacy pipelines" enable brands to use your data, without ever putting your privacy at risk.`
          : null}
      </p>
    </div>
  );
};
