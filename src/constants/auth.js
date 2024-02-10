import { ICON } from './importImg';
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
    errorMessage: {
      empty: 'Enter your nickname',
    },
  },
  title: {
    regex: /^[a-zA-Z ]{0,20}$|^[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]{0,11}$/,
    errorMessage: {
      empty: 'Enter title',
      invalid: 'Title is too long',
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
