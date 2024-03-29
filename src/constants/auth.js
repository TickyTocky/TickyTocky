import { ICON } from '@/constants/importImage';
const { eye } = ICON;

export const USER_INPUT_VALIDATION = {
  email: {
    regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    errorMessage: {
      empty: 'Enter your email address',
      invalid: 'Not a valid Email',
      check: 'Please check your email or password',
      confirm: 'This email is already in use',
    },
  },
  password: {
    regex: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/,
    errorMessage: {
      empty: 'Enter your password',
      invalid: 'Not a valid Password',
      check: 'Please check your email or password',
      checkPassword: 'Please check your password',
    },
  },
  newPassword: {
    regex: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/,
    errorMessage: {
      empty: 'Enter your password',
      invalid: 'Not a valid Password',
      check: 'Please check your email or password',
    },
  },
  passwordConfirm: {
    errorMessage: {
      confirm: 'Passwords does not match',
    },
  },
  nickname: {
    regex: /^[^\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
    errorMessage: {
      invalid: 'Not a valid nickname',
      empty: 'Enter your nickname',
    },
  },
};

export const PASSWORD_SHOW_MODE = {
  on: {
    iconEye: eye.on.url,
    inputType: 'text',
    showMode: eye.on.alt,
  },
  off: {
    iconEye: eye.off.url,
    inputType: 'password',
    showMode: eye.off.alt,
  },
};
