import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import BaseButton from '@/components/common/button/BaseButton';
import DateField from '@/components/common/DateField';
import InputField from '@/components/common/InputField';
import ImageField from '@/components/common/ImageField';
import TagField from '@/components/common/TagField';
import DropDown from '@/components/common/DropDown/index';
import IconModal from '@/components/layout/modal/IconModal';
import useGetMembers from '@/hooks/useGetMembers';
import useGetColumns from '@/hooks/useGetColumns';
import useCreateCard from '@/hooks/card/useCreateCard';
import useModalState from '@/hooks/useModalState';
import { IMAGE, ICON } from '@/constants';
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
  const router = useRouter();
  const { id: dashboardId } = router.query;
  const { handleSubmit, reset } = useFormContext();
  const { modalState, toggleModal: successToggle } = useModalState(['success']);
  const { memberList } = useGetMembers({ dashboardId });
  const { columnList } = useGetColumns({ dashboardId });
  const { imageUrl, title, description, dueDate } = cardItemData;
  const {
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
  } = useCreateCard({
    isEdit,
    columnId,
    dashboardId,
    cardItemData,
    toggleModal,
    successToggle,
    reset,
  });

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
