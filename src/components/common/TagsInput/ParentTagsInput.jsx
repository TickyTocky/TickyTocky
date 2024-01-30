import TagField from '.';
import { useState } from 'react';

const ParentTagsInput = () => {
  const [tagList, setTagList] = useState([]);
  console.log(tagList);
  return <TagField tagList={tagList} setTagList={setTagList} />;
};

export default ParentTagsInput;
