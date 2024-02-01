import DropDown from '.';
import { useState } from 'react';
import { data } from '@/constants/mock-columnlist.json';
import { members } from '@/constants/mock-assignees.json';
import { list } from '@/constants/mock-timeline.json';

const ParentsDropDown = () => {
  const [assigneeId, setAssigneeId] = useState(null);
  const [columnId, setColumnId] = useState(null);

  const onClickInput = () => {};

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
      <DropDown timeLineData={list} onClickInput={onClickInput} type='timeline' />
    </>
  );
};

export default ParentsDropDown;
