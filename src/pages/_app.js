import Modal from 'react-modal';
import { FormProvider, useForm } from 'react-hook-form';
import FullLayout from '@/components/layout/Layouts/FullLayout';
import EmptyLayout from '@/components/layout/Layouts/EmptyLayout';
import '@/styles/base/common.scss';

Modal.setAppElement('#__next');

export default function App({ Component, pageProps }) {
  const MainLayout = Component.FullLayout || EmptyLayout;
  const methods = useForm({ mode: 'all' });

  return (
    <FormProvider {...methods}>
      <FullLayout>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </FullLayout>
    </FormProvider>
  );
}
