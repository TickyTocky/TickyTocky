import Image from 'next/image';
import classNames from 'classnames/bind';
import useToggleButton from '@/hooks/useToggleButton';
import { PASSWORD_SHOW_MODE, USER_INPUT_VALIDATION } from '@/constants';
import styles from './IndividualInput.module.scss';

const cx = classNames.bind(styles);

const IndividualInput = ({
  label,
  name,
  type = 'text',
  isRequired = false,
  isCurrentPassword = true,
  formMethods,
  ...props
}) => {
  const {
    getValues,
    formState: { errors },
    register,
  } = formMethods;
  const { isVisible, handleToggleClick } = useToggleButton();

  const { regex, errorMessage } = USER_INPUT_VALIDATION[name] || {};
  const { iconEye, inputType, showMode } = isVisible
    ? PASSWORD_SHOW_MODE.on
    : PASSWORD_SHOW_MODE.off;

  const isError = !!errors?.[name]?.message;

  return (
    <div className={cx('input-field')}>
      <label htmlFor={name} className={cx('input-field-label', { required: isRequired })}>
        {label}
      </label>

      <div className={cx('input-group')}>
        <input
          {...register(name, {
            required: isRequired ? 'This is Required.' : errorMessage?.empty,
            pattern: {
              value: regex,
              message: errorMessage?.invalid,
            },
            minLength:
              name === 'password' ||
              (name === 'newPassword' && {
                value: 8,
                message: 'Please write at least 8 characters',
              }),
            validate: name === 'passwordConfirm' && {
              notMatch: (value) => {
                if (isCurrentPassword) {
                  const { password } = getValues();
                  return password === value || errorMessage.confirm;
                }
                const { newPassword } = getValues();
                return newPassword === value || errorMessage.confirm;
              },
            },
          })}
          type={type === 'password' ? inputType : type}
          className={cx('input', { error: isError, empty: isRequired && isError })}
          {...props}
        />
        {type === 'password' && (
          <button
            type='button'
            role='switch'
            aria-label={showMode}
            aria-checked={isVisible}
            onClick={handleToggleClick}
            className={cx('btn-password-toggle')}
          >
            <Image src={iconEye} alt={showMode} width={24} height={24} />
          </button>
        )}
      </div>

      {isRequired ? (
        <></>
      ) : (
        <div className={cx('input-field-messsage')}>{errors?.[name]?.message}</div>
      )}
    </div>
  );
};

export default IndividualInput;
