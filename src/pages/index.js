import Head from 'next/head';
import classNames from 'classnames/bind';
import styles from './landing.module.scss';
import LandingNav from '@/components/landing/Nav';
import LandingHeader from '@/components/landing/Header';
import LandingFooter from '@/components/landing/Footer';
import LandingFeaturesOverview from '@/components/landing/FeaturesOverview';
import LandingPricingTable from '@/components/landing/PricingTable';
import LandingDetailedFeatures from '@/components/landing/DetailedFeatures';

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
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ticky-tocky.vercel.app/' />
        <meta property='og:title' content='TickyTocky' />
        <meta
          property='og:description'
          content='The smartest way to manage projects with your team.'
        />
        <meta
          property='og:image'
          content='https://ticky-tocky.vercel.app/images/og-thumbnail.png'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://ticky-tocky.vercel.app/' />
        <meta property='twitter:title' content='TickyTocky' />
        <meta
          property='twitter:description'
          content='The smartest way to manage projects with your team.'
        />
        <meta
          property='twitter:image'
          content='https://ticky-tocky.vercel.app/images/og-thumbnail.png'
        />
        <link rel='icon' href='/svg/ic-favicon.svg' />
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
