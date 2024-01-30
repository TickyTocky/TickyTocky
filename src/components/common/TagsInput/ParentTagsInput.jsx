import Tagsinput from '.';
import { useState } from 'react';

const ParentTagsInput = () => {
  const [tagList, setTagList] = useState([]);

  return <Tagsinput tagList={tagList} setTagList={setTagList} />;
};

export default ParentTagsInput;
