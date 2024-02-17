import { useState } from 'react';
import dayjs from 'dayjs';
import Cards from '@/api/cards';
import { IMAGE_REGEX } from '@/constants';

const useCreateCard = ({
  isEdit,
  columnId,
  dashboardId,
  cardItemData,
  toggleModal,
  successToggle,
  reset,
}) => {
  const { id: cardId, imageUrl, assignee, tags } = cardItemData;

  const [assigneeId, setAssigneeId] = useState(isEdit ? assignee?.id : null);
  const [columnName, setColumnName] = useState(columnId);
  const [tagList, setTagList] = useState(isEdit ? [...tags] : []);
  const [selectedImage, setSelectedImage] = useState(isEdit ? imageUrl : null);

  const DEFAUTL_IMAGE = process.env.NEXT_PUBLIC_DEFAULT_IMAGE_URL;
  const isImageUrl = !!imageUrl && IMAGE_REGEX.test(imageUrl.toLowerCase());

  const handleSuccessModalOpen = () => {
    successToggle('success');
  };

  const handleModalClose = () => {
    successToggle('success');
    toggleModal('addCardModal');
    toggleModal('editCard');
    reset();
  };

  const onSubmit = async (data) => {
    let storeData = { ...data };
    let formattedDate = dayjs(storeData['dueDate']).format('YYYY-MM-DD HH:mm');
    let description = storeData['description'].replace(/(?:\r\n|\r|\n)/g, '<br>');

    const isEmptyImage = selectedImage === null;

    const submitData = {
      ...data,
      assigneeUserId: Number(assigneeId),
      dashboardId: Number(dashboardId),
      columnId: isEdit ? columnName : Number(columnId),
      description,
      imageUrl: isEmptyImage ? DEFAUTL_IMAGE : selectedImage,
      dueDate: formattedDate,
      tags: tagList,
    };

    if (!assigneeId) {
      return;
    }

    if (isEdit) {
      await Cards.edit(cardId, submitData);
      await Cards.getList(columnId);
      await Cards.getList(columnName);
      handleSuccessModalOpen();
    } else {
      await Cards.create(submitData);
      await Cards.getList(columnId);
      handleSuccessModalOpen();
    }
  };

  return {
    assigneeId,
    setAssigneeId,
    columnName,
    setColumnName,
    tagList,
    setTagList,
    setSelectedImage,
    isImageUrl,
    handleModalClose,
    onSubmit,
  };
};

export default useCreateCard;
