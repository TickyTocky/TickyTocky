import Image from 'next/image';
import { HexColorPicker } from 'react-colorful';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import InputField from '@/components/common/InputField';
import BaseButton from '@/components/common/button/BaseButton';
import CommonModal from '@/components/layout/modal/CommonModal';
import useTogglePopup from '@/hooks/useTogglePopup';
import useCreateDashboard from '@/hooks/useCreateDashboard';
import Dashboard from '@/api/dashboards';
import { ICON } from '@/constants/importImage';
import { COLOR_LIST, DEFAULT_BLACK, DEFAULT_COLOR } from '@/constants';
import styles from './CreateDashboard.module.scss';

const cx = classNames.bind(styles);
const { colorize } = ICON;

function CreateDashboard({ isModalOpen, closeModal }) {
  const { handleSubmit } = useFormContext();
  const { isOpen, popupRef, buttonRef, openPopup, closePopup } = useTogglePopup();
  const { color, setColor, firstButtonRef, inputValue, handleOnChange } =
    useCreateDashboard();
  const MAX_LENGTH = 20;

  const onSubmit = async (data) => {
    data.color = color;
    await Dashboard.create(data);
    await Dashboard.getList();
    closeModal();
  };

  return (
    <CommonModal
      isModalOpen={isModalOpen}
      closeModal={() => closeModal}
      label='Create Board'
    >
      <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
        <div className={cx('modal-container')}>
          <div className={cx('modal-container-thumbnail-container')}>
            <div
              className={cx('modal-container-thumbnail-container-figure-circle')}
              style={{ background: `${color}` }}
            >
              <label className={cx('name')}>{inputValue}</label>
            </div>
            <div
              className={cx('modal-container-thumbnail-container-figure-square')}
              style={{ background: `${color}` }}
            >
              <label className={cx('name')}>{inputValue}</label>
            </div>
          </div>

          <div className={cx('modal-container-dashboard-name-input')}>
            <InputField
              label='Title'
              name='title'
              placeholder='Enter the title of dashboard'
              autoComplete='off'
              maxLength={MAX_LENGTH}
              onChange={(e) => handleOnChange(e)}
            />
          </div>

          <div className={cx('modal-container-add-color-container')}>
            <label className={cx('modal-container-add-color-container-label')}>
              Add Color
            </label>
            <div
              className={cx(
                'modal-container-add-color-container-color-palette-container'
              )}
            >
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
                  <div
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={cx('button-container')}>
          <div className={cx('button-container-button')}>
            <BaseButton
              onClick={closeModal}
              variant='outline'
              text='Cancel'
              size='xl'
            ></BaseButton>
          </div>
          <div className={cx('button-container-button')}>
            <BaseButton
              type='submit'
              variant='secondary'
              text='Create'
              size='xl'
            ></BaseButton>
          </div>
        </div>
      </form>
    </CommonModal>
  );
}

export default CreateDashboard;
