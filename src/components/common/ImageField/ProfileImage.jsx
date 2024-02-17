import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Users from '@/api/users';
import { IMAGE, ICON } from '@/constants';
import useUserStore from '@/stores/useUserStore';
import styles from './ImageField.module.scss';

const cx = classNames.bind(styles);
const { uploadImage } = IMAGE;
const { add } = ICON;

const AvatarField = ({ name, profileImageInit, setProfileImageInit }) => {
  const { register, setValue } = useFormContext();
  const [imagePreview, setImagePreview] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const { user } = useUserStore();

  const handleImageFormat = async (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const imagePreviewUrl = URL.createObjectURL(file);
      setIsSelected(true);
      setImagePreview(imagePreviewUrl);

      const res = await Users.addProfileImage(file);

      if (res) {
        setValue(name, res.profileImageUrl);
      }
    }
  };

  useEffect(() => {
    if (user?.profileImageUrl && !isSelected) {
      setImagePreview(user.profileImageUrl);
    }
    if (profileImageInit) {
      setImagePreview('');
      setIsSelected(false);
      setProfileImageInit(false);
      if (imagePreview) {
        return () => URL.revokeObjectURL(imagePreview);
      }
    }
  }, [imagePreview, user, isSelected, profileImageInit, setProfileImageInit]);

  return (
    <div className={cx('image-field')}>
      <p className={cx('image-field-label')}>Profile Image</p>
      <div className={cx('image-field-input')}>
        {imagePreview || isSelected ? (
          <Image
            src={imagePreview}
            alt='thumbnail-image'
            className={cx('image-field-input-thumbnail')}
            sizes='100%'
            fill
            priority
          ></Image>
        ) : (
          <Image
            fill
            src={uploadImage.url}
            alt={uploadImage.alt}
            className={cx('image-field-input-thumbnail')}
            sizes='100%'
            priority
          ></Image>
        )}

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
              onChange={handleImageFormat}
              type='file'
              name={name}
              id='imageUrl'
              accept='.jpg, .png, .jpeg,'
              className={cx('input-hidden')}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvatarField;
