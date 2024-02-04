import Head from 'next/head';
import classNames from 'classnames/bind';
import styles from './landing.module.scss';
import LandingNav from '@/components/landing/Nav';
import LandingHeader from '@/components/landing/Header';
import LandingFooter from '@/components/landing/Footer';
import LandingFeaturesOverview from '@/components/landing/FeaturesOverview';
import LandingDetailedFeatures from '@/components/landing/DetailedFeatures';
import LandingPricingTable from '@/components/landing/PricingTable';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <Head>
        <title>TickyTocky</title>
        <meta
          name='description'
          content='The smartest way to manage projects with your team.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={cx('landing')}>
        <LandingNav />
        <LandingHeader />
        <LandingFeaturesOverview />
        <LandingDetailedFeatures />
        <LandingPricingTable />
        <LandingFooter />
      </div>
    </>
  );
}
