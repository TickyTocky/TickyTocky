import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import { IMAGE, ICON } from '@/constants/importImage';
import styles from './ImageField.module.scss';

const cx = classNames.bind(styles);
const { uploadImage } = IMAGE;
const { add } = ICON;

const ImageField = ({ name }) => {
  const { register } = useFormContext();
  const imageUrl = '';
  const isSelectedImage = !!imageUrl;

  return (
    <div className={cx('image-field')}>
      <p className={cx('image-field-label')}>Thumbnail</p>
      <div className={cx('image-field-input')}>
        {isSelectedImage ? (
          <Image
            fill
            src={imageUrl}
            alt='thumbnail-image'
            className={cx('image-field-input-thumbnail')}
            sizes='100%'
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

export default ImageField;
