import { useState, useEffect } from 'react';
import useDropDownDetectClose from '@/hooks/useDropDownDetectClose';

const useDropDownLogic = ({
  columnListData = [],
  assigneeListData = [],
  listValue,
  setListValue,
  type,
  DROPDOWN_TIMELINE_MENU,
  onClickInput,
  dropDownRef,
}) => {
  const [isOpen, setIsOpen] = useDropDownDetectClose(dropDownRef);
  const [timelineValue, setTimelineValue] = useState('Latest');
  const [dropDownList, setDropDownList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    let list = [];
    if (type === 'column') {
      list = columnListData;
    } else if (type === 'assignee') {
      list = assigneeListData;
    } else {
      list = DROPDOWN_TIMELINE_MENU;
    }
    setDropDownList(list);

    const foundItem = list?.find(
      (item) => item.id === listValue || item.userId === listValue
    );
    setSelectedItem(foundItem || {});
  }, [columnListData, assigneeListData, listValue, type]);

  useEffect(() => {
    if (type === 'assignee' && assigneeListData?.length > 0 && !listValue) {
      setListValue(assigneeListData[0]?.userId);
    }
  }, [assigneeListData, listValue, setListValue, type]);

  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleListItemClick = (e, value) => {
    e.stopPropagation();
    if (type === 'timeline') {
      onClickInput(value);
      setTimelineValue(value);
    } else {
      setListValue(value);
      onClickInput && onClickInput(value);
    }
    handleOpenClick();
  };

  return {
    isOpen,
    timelineValue,
    dropDownList,
    selectedItem,
    handleOpenClick,
    handleListItemClick,
  };
};

export default useDropDownLogic;
