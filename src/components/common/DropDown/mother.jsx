import DropDown from '.';
import { useState } from 'react';
import { data } from './mock-columnlist.json';
import { members } from './mock-assignees.json';

const Mother = () => {
  const [assigneeId, setAssigneeId] = useState(null);
  const [columnId, setColumnId] = useState(null);

  return (
    <>
      <DropDown
        columnListData={data}
        assigneeListData={members}
        type='column' // assignee, column
        listValue={columnId}
        setListValue={setColumnId}
      />
      <DropDown
        columnListData={data}
        assigneeListData={members}
        type='assignee' // assignee, column
        listValue={assigneeId}
        setListValue={setAssigneeId}
      />
    </>
  );
};

export default Mother;
