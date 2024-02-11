import { useRouter } from 'next/router';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import Cards from '@/api/cards';
import Members from '@/api/members';
import Columns from '@/api/columns';
import BaseButton from '@/components/common/button/BaseButton';
import DateField from '@/components/common/DateField';
import InputField from '@/components/common/InputField';
import ImageField from '@/components/common/ImageField';
import TagField from '@/components/common/TagField';
import DropDown from '@/components/common/DropDown/index';
import useMemberStore from '@/stores/useMemberStore';
import useColumnStore from '@/stores/useColumnStore';
import useAsync from '@/hooks/useAsync';
import useModalState from '@/hooks/useModalState';
import { IMAGE_REGEX } from '@/constants';
import IconModal from '@/components/layout/modal/IconModal';
import { IMAGE, ICON } from '@/constants/importImage';
import styles from './CreateCard.module.scss';

const cx = classNames.bind(styles);
const { uploadImage } = IMAGE;
const { success } = ICON;

const CreateCard = ({
  columnId,
  columnTitle,
  toggleModal,
  cardItemData = {},
  isEdit = false,
}) => {
  const { handleSubmit, reset } = useFormContext();
  const { modalState, toggleModal: successToggle } = useModalState(['success']);
  const router = useRouter();
  const { id } = router.query;
  useAsync(() => Members.getList(1, 20, id));
  const { memberList } = useMemberStore();
  useAsync(() => Columns.getList(id));
  const { columnList } = useColumnStore();

  const {
    id: cardId,
    imageUrl,
    assignee,
    title,
    description,
    dueDate,
    tags,
  } = cardItemData;

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
      dashboardId: Number(id),
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

  return (
    <>
      <form className={cx('container')} onSubmit={handleSubmit(onSubmit)}>
        <div className={cx('field')}>
          <div className={cx('field-left')}>
            {isEdit ? (
              <ImageField
                label='Image'
                name='imageUrl'
                imageUrl={isImageUrl ? imageUrl : uploadImage.url}
                columnId={columnId}
                setSelectedImage={setSelectedImage}
              />
            ) : (
              <ImageField
                label='Image'
                name='imageUrl'
                columnId={columnId}
                setSelectedImage={setSelectedImage}
              />
            )}
          </div>
          <div className={cx('field-right')}>
            <div className={cx('col-2')}>
              <div className={cx('col-2-name')}>
                <p className={cx('label')}>Column Name</p>
                {isEdit ? (
                  <DropDown
                    type='column'
                    columnListData={columnList}
                    listValue={columnName}
                    setListValue={setColumnName}
                  />
                ) : (
                  <div className={cx('disabled')}>
                    <span className={cx('tag')}>{columnTitle}</span>
                  </div>
                )}
              </div>
              <div className={cx('col-2-manager')}>
                <p className={cx('label')}>Manager</p>
                <DropDown
                  type='assignee'
                  assigneeListData={memberList}
                  listValue={assigneeId}
                  setListValue={setAssigneeId}
                />
              </div>
            </div>
            <InputField
              label='Title'
              name='title'
              type='text'
              defaultValue={isEdit ? title : ''}
              maxLength={15}
              isRequired
            />
            <InputField
              label='Explanation'
              name='description'
              type='textarea'
              defaultValue={isEdit ? description : ''}
              isRequired
            />
            <DateField
              label='Deadline'
              name='dueDate'
              defaultValue={isEdit ? dueDate : ''}
            />
            <TagField tagList={tagList} setTagList={setTagList} />
          </div>
        </div>
        <div className={cx('field-submit')}>
          <BaseButton
            type='button'
            size='xl'
            variant='outline'
            text='Cancel'
            onClick={handleModalClose}
          />
          {isEdit ? (
            <BaseButton type='submit' size='xl' variant='secondary' text='Apply' />
          ) : (
            <BaseButton type='submit' size='xl' variant='secondary' text='Create' />
          )}
        </div>
      </form>

      <IconModal
        isModalOpen={modalState.success}
        closeModal={handleModalClose}
        iconName={success}
        iconSize={58}
        title='Success'
      >
        <div className={cx('modal-button')}>
          <BaseButton
            variant='outline'
            size='xl'
            text='Close'
            onClick={handleModalClose}
          />
        </div>
      </IconModal>
    </>
  );
};

export default CreateCard;
