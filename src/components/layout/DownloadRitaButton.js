import {DownloadSvg} from '../../../public/icons/DownloadSvg';

import styles from '../../../styles/DownloadRitaButton.module.css';

export const DownloadRitaButton = ({color, backgroundColor}) => {
  return (
    <a
      className={styles.downloadButton}
      style={{
        borderColor: color,
        backgroundColor: backgroundColor ? backgroundColor : 'transparent',
      }}
      href={'https://app.adjust.com/768u4g3'}
      target={'_blank'}>
      <p className={styles.p} style={{marginRight: '8px', color: color}}>
        Download Rita now
      </p>
      <DownloadSvg color={color} />
    </a>
  );
};
