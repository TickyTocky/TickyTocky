import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import Cards from '@/api/cards';
import { IMAGE, ICON } from '@/constants/importImage';
import styles from './ImageField.module.scss';

const cx = classNames.bind(styles);
const { uploadImage } = IMAGE;
const { add } = ICON;

const ImageField = ({
  label,
  name,
  columnId,
  setSelectedImage,
  imageUrl = '',
  ...props
}) => {
  const { register } = useFormContext();
  const [imagePreview, setImagePreview] = useState('');
  const showImageUrl = imagePreview || imageUrl || uploadImage.url;

  const handleImageFormat = async (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const imagePreviewUrl = URL.createObjectURL(file);
      setImagePreview(imagePreviewUrl);

      const res = await Cards.addCardIamge(columnId, file);
      setSelectedImage(res);
    }
  };

  useEffect(() => {
    if (imagePreview) {
      return () => URL.revokeObjectURL(imagePreview);
    }
  }, [imagePreview]);

  return (
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
    </div>
  );
};

export default ImageField;
