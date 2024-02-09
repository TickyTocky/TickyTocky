import Image from 'next/image';
import { HexColorPicker } from 'react-colorful';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import InputField from '@/components/common/InputField';
import SuccessDashboard from '@/components/dashboard/modal/dashboard/SuccessDashboard';
import useTogglePopup from '@/hooks/useTogglePopup';
import useCreateDashboard from '@/hooks/useCreateDashboard';
import useModalState from '@/hooks/useModalState';
import Dashboard from '@/api/dashboards';
import { COLOR_LIST, DEFAULT_BLACK, DEFAULT_COLOR } from '@/constants';
import { ICON } from '@/constants/importImage';
import useAsync from '@/hooks/useAsync';
import useDashBoardStore from '@/stores/useDashboardStore';
import styles from './DashboardTitle.module.scss';

const cx = classNames.bind(styles);
const { colorize } = ICON;

const DashboardTitle = ({ dashboardId }) => {
  useAsync(() => Dashboard.get(dashboardId));
  const { dashboard } = useDashBoardStore();
  const { handleSubmit } = useFormContext();
  const { isOpen, popupRef, buttonRef, openPopup, closePopup } = useTogglePopup();
  const { setColor, color, firstButtonRef, inputValue, handleOnChange } =
    useCreateDashboard();
  const { modalState, toggleModal } = useModalState(['dashboardEditSuccess']);
  const MAX_LENGTH = 20;

  const onSubmit = async (data) => {
    data.color = color;
    if (data.title && data.color) {
      toggleModal('dashboardEditSuccess');
      await Dashboard.edit(dashboardId, data);
    } else {
      return;
    }
  };

  return (
    <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
      <article className={cx('dashboard-title-container')}>
        <header className={cx('dashboard-title-container-title-button')}>
          <span className={cx('title')}>Dashboard Title</span>
          <BaseButton variant='secondary' text='Apply' size='md' type='submit' />
          <SuccessDashboard
            isModalOpen={modalState.dashboardEditSuccess}
            closeModal={() => toggleModal('dashboardEditSuccess')}
          />
        </header>

        <section className={cx('dashboard-title-container-thumbnail-container')}>
          <div
            className={cx('dashboard-title-container-thumbnail-container-figure-circle')}
            style={{ background: `${color}` || `${DEFAULT_BLACK}` }}
          >
            <label className={cx('name')}>{inputValue}</label>
          </div>
          <div
            className={cx('dashboard-title-container-thumbnail-container-figure-square')}
            style={{ background: `${color}` || `${DEFAULT_BLACK}` }}
          >
            <label className={cx('name')}>{inputValue}</label>
          </div>
        </section>

        <InputField
          label='Name'
          name='title'
          placeholder='Enter dashboard title'
          defaultValue={dashboard?.title}
          maxLength={MAX_LENGTH}
          onChange={(e) => handleOnChange(e)}
        />
        <section className={cx('dashboard-title-container-add-color-container')}>
          <label className={cx('label')}>Add Color</label>
          <div className={cx('color-palette-container')}>
            <div className={cx('color-palette')}>
              <button
                type='button'
                ref={firstButtonRef}
                onClick={() => setColor(DEFAULT_BLACK)}
                style={{ background: `${DEFAULT_BLACK}` }}
                className={cx('color-palette-one-color')}
              ></button>
              {COLOR_LIST.map((color, i) => (
                <button
                  type='button'
                  key={`color-list-key-${i}`}
                  onClick={() => {
                    setColor(`${color}`);
                  }}
                  style={{ background: `${color}` }}
                  className={cx('color-palette-one-color')}
                ></button>
              ))}
            </div>

            <div className={cx('colorpicker-button-container')}>
              <button
                ref={buttonRef}
                className={cx('colorpicker-button-container-colorpicker-button', {
                  active: isOpen,
                })}
                onClick={isOpen ? closePopup : openPopup}
                type='button'
              >
                <Image src={colorize.url} alt={colorize.alt} width={24} height={24} />
              </button>
              {isOpen && (
                <section
                  ref={popupRef}
                  className={cx('colorpicker-button-container-modal-container')}
                >
                  <label
                    className={cx('colorpicker-button-container-modal-container-label')}
                  >
                    Color Picker
                  </label>
                  <HexColorPicker
                    className={cx(
                      'colorpicker-button-container-modal-container-colorpicker'
                    )}
                    color={DEFAULT_COLOR}
                    onChange={setColor}
                  />
                </section>
              )}
            </div>
          </div>
        </section>
      </article>
    </form>
  );
};

export default DashboardTitle;
