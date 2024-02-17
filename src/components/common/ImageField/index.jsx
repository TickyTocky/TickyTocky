import Image from 'next/image';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import IconModal from '@/components/layout/modal/IconModal';
import useSelectedImage from '@/hooks/imageField/useSeletedImage';
import useModalState from '@/hooks/useModalState';
import { IMAGE, ICON } from '@/constants';
import styles from './ImageField.module.scss';

const cx = classNames.bind(styles);
const { uploadImage } = IMAGE;
const { add, reset } = ICON;

const ImageField = ({
  label,
  name,
  columnId,
  setSelectedImage,
  imageUrl = '',
  ...props
}) => {
  const { modalState, toggleModal } = useModalState(['initialConfirmModal']);
  const { register } = useFormContext();
  const [imagePreview, setImagePreview] = useState('');
  const showImageUrl = imagePreview || imageUrl || uploadImage.url;
  const { handleImageFormat, handleInitialSubmit } = useSelectedImage({
    columnId,
    setImagePreview,
    imagePreview,
    setSelectedImage,
    uploadImage,
    toggleModal,
  });

  return (
    <>
      <div className={cx('image-field')}>
        <p className={cx('image-field-label')}>{label}</p>
        <div className={cx('image-field-input')}>
          <Image
            fill
            src={showImageUrl}
            alt='thumbnail-image'
            className={cx('image-field-input-thumbnail')}
            sizes='100%'
            priority
          ></Image>
          <div className={cx('image-field-input-overlay')}>
            <label
              htmlFor='imageUrl'
              className={cx('button-add-image')}
              aria-label='Thumbnail upload button'
            >
              <Image
                src={add.active.url}
                alt={add.active.alt}
                width={24}
                height={24}
              ></Image>
              <input
                {...register(name)}
                type='file'
                name={name}
                id='imageUrl'
                accept='image/*'
                className={cx('input-hidden')}
                {...props}
                onChange={handleImageFormat}
              />
            </label>
          </div>
        </div>
        <BaseButton
          size='xl'
          text='Initialize'
          variant='remove'
          onClick={() => toggleModal('initialConfirmModal')}
        />
      </div>

      <IconModal
        isModalOpen={modalState.initialConfirmModal}
        closeModal={() => toggleModal('initialConfirmModal')}
        iconSize={58}
        iconName={reset}
        title='Initialize'
        desc='Are you sure you want to reset?'
      >
        <div className={cx('modal-btn')}>
          <BaseButton
            size='lg'
            text='Cancel'
            variant='outline'
            onClick={() => toggleModal('initialConfirmModal')}
          />
          <BaseButton
            size='lg'
            text='Apply'
            variant='remove'
            onClick={handleInitialSubmit}
          />
        </div>
      </IconModal>
    </>
  );
};

export default ImageField;
