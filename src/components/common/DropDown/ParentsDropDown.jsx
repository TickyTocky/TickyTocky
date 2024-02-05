import DropDown from '.';
import { useState } from 'react';
import { data } from '@/constants/mock-columnlist.json';
import { members } from '@/constants/mock-assignees.json';

const ParentsDropDown = () => {
  const [assigneeId, setAssigneeId] = useState(null);
  const [columnId, setColumnId] = useState(null);

  const onClickInput = (value) => {
    console.log(value);
  };

  return (
    <>
      <DropDown
        columnListData={data}
        type='column'
        listValue={columnId}
        setListValue={setColumnId}
      />
      <DropDown
        assigneeListData={members}
        type='assignee'
        listValue={assigneeId}
        setListValue={setAssigneeId}
      />
      <DropDown onClickInput={onClickInput} type='timeline' />
    </>
  );
};

export default ParentsDropDown;
