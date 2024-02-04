import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

const useTagList = () => {
  const { setValue } = useFormContext();
  const [tagList, setTagList] = useState([]);
  setValue('tags', tagList);

  return { tagList, setTagList };
};

export default useTagList;
