import { COLOR_LIST } from '@/constants';

const useAvatarColor = (id) => {
  const lastNumber = id % 10;

  if (lastNumber === 0 || lastNumber === 5) {
    return COLOR_LIST[0];
  } else if (lastNumber === 1) {
    return COLOR_LIST[1];
  } else if (lastNumber === 2 || lastNumber === 6) {
    return COLOR_LIST[2];
  } else if (lastNumber === 3 || lastNumber === 7) {
    return COLOR_LIST[3];
  } else if (lastNumber === 4 || lastNumber === 8) {
    return COLOR_LIST[4];
  } else {
    return COLOR_LIST[5];
  }
};

export default useAvatarColor;
