import Modal from 'react-modal';
import '@/styles/base/common.scss';

Modal.setAppElement('#__next');

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
