import { FormProvider, useForm } from 'react-hook-form';
import '@/styles/base/common.scss';

export default function App({ Component, pageProps }) {
  const methods = useForm({ mode: 'all' });

  return (
    <FormProvider {...methods}>
      <Component {...pageProps} />
    </FormProvider>
  );
}
