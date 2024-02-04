import Head from 'next/head';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { ICON } from '@/constants/importImage';
import styles from './landing.module.scss';
import LandingNav from '@/components/landing/Nav';
import LandingHeader from '@/components/landing/Header';
import LandingFooter from '@/components/landing/Footer';

const cx = classNames.bind(styles);
const { background, landing } = ICON;

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
        <div className={cx('landing-body')}>
          <div className={cx('landing-body-title')}>
            <p>Powerful</p>
            <p>Collaboration Features</p>
          </div>
          <div className={cx('landing-body-background')}>
            <Image
              src={background.body.url}
              alt={background.body.alt}
              priority={true}
              width={1316}
              height={987}
            />
          </div>
          <div className={cx('landing-body-icons')}>
            <div className={cx('landing-body-icon')}>
              <Image
                src={landing.invite.url}
                alt={landing.invite.alt}
                width={60}
                height={60}
              />
              <p>Invite members</p>
            </div>
            <div className={cx('landing-body-icon')}>
              <Image
                src={landing.thumbnail.url}
                alt={landing.thumbnail.alt}
                width={60}
                height={60}
              />
              <p>Make Thumbnail</p>
            </div>
            <div className={cx('landing-body-icon')}>
              <Image
                src={landing.darkmode.url}
                alt={landing.darkmode.alt}
                width={60}
                height={60}
              />
              <p>Dark Mode</p>
            </div>
            <div className={cx('landing-body-icon')}>
              <Image
                src={landing.device.url}
                alt={landing.device.alt}
                width={60}
                height={60}
              />
              <p>All Devices</p>
            </div>
            <div className={cx('landing-body-icon')}>
              <Image
                src={landing.dashboard.url}
                alt={landing.dashboard.alt}
                width={60}
                height={60}
              />
              <p>Dashboard</p>
            </div>
          </div>
        </div>
        <div className={cx('landing-fucntions')}>
          <div className={cx('landing-fucntion')}>
            <h2>Share Planned Schedules</h2>
            <div>
              - Share your schedules with the team and receive feedback on the progress of
              tasks!
            </div>
            <div>
              - Invite your team members to share the dashboard anytime, and you can also
              cancel invitations if sent by mistake.
            </div>
            <div>
              - Of course, it&apos;s also possible to remove team members from the
              dashboard.
            </div>
          </div>
          <div className={cx('landing-fucntion')}>
            <h2>Flexible Task Status Updates</h2>
            <div>- Easily change the status of tasks with drag and drop!</div>
            <div>
              - Arrange your work cards freely according to the priority of the tasks.
            </div>
          </div>
          <div className={cx('landing-fucntion')}>
            <h2>Organize Tasks with Tags</h2>
            <div>- Add appropriate tags to each task for effective differentiation!</div>
          </div>
          <div className={cx('landing-fucntion')}>
            <h2>Design Accessible to Everyone</h2>
            <div>
              - With an intuitive design, you can start using it immediately without any
              learning process.
            </div>
            <div>
              - Its intuitive and clean design allows you to apply it to your work right
              away, with no separate learning curve.
            </div>
          </div>
        </div>
        <div className={cx('landing-pricing')}>
          <h2 className={cx('landing-pricing-title')}>Choose Your Plan</h2>
          <div className={cx('pricing-options')}>
            <div className={cx('pricing-option')}>
              <div className={cx('pricing-option-plan')}>Free</div>
              <div className={cx('pricing-option-price')}>
                $0 <span>per month</span>
              </div>
              <ul>
                <li>Access to basic features</li>
                <li>5 active projects</li>
                <li>Community support</li>
              </ul>
            </div>
            <div className={cx('pricing-option', 'pro')}>
              <div className={cx('pricing-option-plan')}>Pro</div>
              <div className={cx('pricing-option-price')}>
                $200 <span>per month</span>
              </div>
              <ul>
                <li>Access to all features</li>
                <li>Unlimited active projects</li>
                <li>Priority support</li>
                <li>Advanced analytics</li>
                <li>Team collaboration tools</li>
              </ul>
            </div>
            <div className={cx('pricing-option', 'enterprise')}>
              <div className={cx('pricing-option-plan')}>Enterprise</div>
              <div className={cx('pricing-option-price')}>Contact us for pricing</div>
              <ul>
                <li>Dedicated support and account manager</li>
                <li>Custom integrations and features</li>
                <li>Enhanced security features</li>
                <li>Personalized onboarding and training</li>
              </ul>
            </div>
          </div>
        </div>
        <LandingFooter />
      </div>
    </>
  );
}
