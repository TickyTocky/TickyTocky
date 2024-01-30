import Modal from 'react-modal';
import { FormProvider, useForm } from 'react-hook-form';
import '@/styles/base/common.scss';

Modal.setAppElement('#__next');

export default function App({ Component, pageProps }) {
  const methods = useForm({ mode: 'all' });

  return (
    <FormProvider {...methods}>
      <Component {...pageProps} />
    </FormProvider>
  );
}
