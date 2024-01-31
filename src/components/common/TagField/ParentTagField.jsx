import TagField from '.';
import { useState } from 'react';

const ParentTagField = () => {
  const [tagList, setTagList] = useState([]);
  return <TagField tagList={tagList} setTagList={setTagList} />;
};

export default ParentTagField;
