import DropDown from '.';
import { useState } from 'react';
import { data } from './mock-columnlist.json';
import { members } from './mock-assignees.json';
import { list } from './mock-timeline.json';

const ParentsDropDown = () => {
  const [assigneeId, setAssigneeId] = useState(null);
  const [columnId, setColumnId] = useState(null);

  const getTimeLIne = () => {};

  return (
    <>
      <DropDown
        columnListData={data}
        type='column' // assignee, column, timeline
        listValue={columnId}
        setListValue={setColumnId}
      />
      <DropDown
        assigneeListData={members}
        type='assignee' // assignee, column, timeline
        listValue={assigneeId}
        setListValue={setAssigneeId}
      />
      <DropDown
        timeLineData={list}
        getTimeLIne={getTimeLIne}
        type='timeline' // assignee, column, timeline
      />
    </>
  );
};

export default ParentsDropDown;
