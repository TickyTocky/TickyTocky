import { useEffect } from 'react';
import Cards from '@/api/cards';

const useSelectedImage = ({
  columnId,
  setImagePreview,
  imagePreview,
  setSelectedImage,
  uploadImage,
  toggleModal,
}) => {
  const handleImageFormat = async (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const imagePreviewUrl = URL.createObjectURL(file);
      setImagePreview(imagePreviewUrl);

      const res = await Cards.addCardIamge(columnId, file);
      setSelectedImage(res);
    }
  };

  const handleInitialSubmit = () => {
    setSelectedImage(null);
    setImagePreview(uploadImage.url);
    toggleModal('initialConfirmModal');
  };

  useEffect(() => {
    if (imagePreview) {
      return () => URL.revokeObjectURL(imagePreview);
    }
  }, [imagePreview]);

  return { handleImageFormat, handleInitialSubmit };
};

export default useSelectedImage;
