import classNames from 'classnames/bind';
import styles from './LandingDetailedFeatures.module.scss';

const cx = classNames.bind(styles);

const LandingDetailedFeatures = () => (
  <div className={cx('landing-fucntions')}>
    <div className={cx('landing-fucntion')}>
      <h2>Share Planned Schedules</h2>
      <div className={cx('landing-fucntion-discription')}>
        <div>
          Share your schedules with the team and receive feedback on the progress of
          tasks!
        </div>
        <div>
          Invite your team members to share the dashboard anytime, and you can also cancel
          invitations if sent by mistake
        </div>
        <div>
          Of course, it&apos;s also possible to remove team members from the dashboard
        </div>
      </div>
    </div>
    <div className={cx('landing-fucntion')}>
      <h2>Flexible Task Status Updates</h2>
      <div className={cx('landing-fucntion-discription')}>
        <div>Easily change the status of tasks with drag and drop!</div>
        <div>Arrange your work cards freely according to the priority of the tasks</div>
        <div>
          Track progress visually with color-coded status indicators for immediate
          understanding
        </div>
      </div>
    </div>
    <div className={cx('landing-fucntion')}>
      <h2>Organize Tasks with Tags</h2>
      <div className={cx('landing-fucntion-discription')}>
        <div>Add appropriate tags to each task for effective differentiation!</div>
        <div>Utilize filter options to quickly find tasks by their assigned tags</div>
        <div>
          Customized tag colors for visual categorization and easier identification
        </div>
      </div>
    </div>
    <div className={cx('landing-fucntion')}>
      <h2>Design Accessible to Everyone</h2>
      <div className={cx('landing-fucntion-discription')}>
        <div>
          With an intuitive design, you can start using it immediately without any
          learning process
        </div>
        <div>
          Its intuitive and clean design allows you to apply it to your work right away,
          with no separate learning curve
        </div>
        <div>
          Supports responsive design, making it accessible on various devices and screen
          sizes
        </div>
      </div>
    </div>
  </div>
);

export default LandingDetailedFeatures;
