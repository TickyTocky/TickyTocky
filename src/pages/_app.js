import Modal from 'react-modal';
import { FormProvider, useForm } from 'react-hook-form';
import FullLayout from '@/components/layout/Layouts/FullLayout';
import EmptyLayout from '@/components/layout/Layouts/EmptyLayout';
import useLoadingStore from '@/stores/useLoadingStore';
import Spinner from '@/components/common/Spinner';
import '@/styles/base/common.scss';

Modal.setAppElement('#__next');

export default function App({ Component, pageProps }) {
  const MainLayout = Component.FullLayout || EmptyLayout;
  const methods = useForm({ mode: 'all' });
  const { isLoading } = useLoadingStore();

  return (
    <FormProvider {...methods}>
      <FullLayout>
        {isLoading && <Spinner />}
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </FullLayout>
    </FormProvider>
  );
}
