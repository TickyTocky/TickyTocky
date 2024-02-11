import classNames from 'classnames/bind';
import styles from './LandingPricingTable.module.scss';

const cx = classNames.bind(styles);

const LandingPricingTable = () => (
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
);

export default LandingPricingTable;
