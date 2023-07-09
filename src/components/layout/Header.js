import {useState} from 'react';
import {useRouter} from 'next/router';

import Modal from 'react-modal';

import {DownloadRitaButton} from './DownloadRitaButton';

import {XSvg} from '../../../public/icons/XSvg.js';
import {RitaLogoSvg} from '../../../public/icons/RitaLogoSvg';
import {MenuSvg} from '../../../public/icons/MenuSvg';

import styles from '../../../styles/Header.module.css';

export const Header = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo} onClick={() => {
              router.push('/');
            }}>
          <RitaLogoSvg /> <span className={styles.logoText}>Rita for users</span>
        </div>

        <div className={styles.links}>
          <button
            className={styles.buttonTitle}
            onClick={() => {
              router.push('/business/index.html');
            }}>
            Business Solution
          </button>
          <button
            className={styles.buttonTitle}
            onClick={() => {
              router.push('/individual#howitworks');
            }}>
            How it works?
          </button>
          <button
            className={styles.buttonTitle}
            onClick={() => {
              router.push('/about');
            }}>
            About us
          </button>
          <button
            className={styles.buttonTitle}
            onClick={() => {
              router.push('/individual#faq');
            }}>
            FAQ
          </button>
          <button
            className={styles.buttonTitle}
            onClick={() => {
              router.push('https://ritapersonaldata.medium.com/');
            }}>
            Blog
          </button>

          <div className={styles.buttonTitle} style={{marginLeft: 48}}>
            <DownloadRitaButton color={'#037B55'} />
          </div>

          <button
            className={styles.buttonIcon}
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}>
            <MenuSvg />
          </button>
        </div>
      </nav>

      <Modal
        isOpen={isModalOpen}
        style={{
          overlay: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0)',
          },
          content: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: 'fit-content',
            background: '#037B55',
            border: 'none',
            padding: '40px 24px 80px',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}>
        <div className={styles.logoContainer}>
          <RitaLogoSvg color={'white'} />
          <div
            onClick={() => {
              setIsModalOpen(false);
            }}>
            <XSvg />
          </div>
        </div>

        <div className={styles.modalLinks}>
          <button
            className={styles.modalButton}
            onClick={() => {
              router.push('https://ritapersonaldata.com/business/');
            }}>
            Business Solution
          </button>
          <button
            className={styles.modalButton}
            onClick={() => {
              router.push('/individual#howitworks');
            }}>
            How it works?
          </button>
          <button
            className={styles.modalButton}
            onClick={() => {
              router.push('https://ritapersonaldata.com/about.html');
            }}>
            About us
          </button>
          <button
            className={styles.modalButton}
            onClick={() => {
              router.push('/individual#faq');
            }}>
            FAQ
          </button>
          <button
            className={styles.modalButton}
            onClick={() => {
              router.push('https://ritapersonaldata.medium.com/');
            }}>
            Blog
          </button>

          <div style={{marginTop: 64}}>
            <DownloadRitaButton backgroundColor={'white'} color={'#037B55'} />
          </div>
        </div>
      </Modal>
    </>
  );
};
