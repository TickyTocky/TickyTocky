import useCardStore from '@/stores/useCardStore';

const useCardFetchData = ({ columnId, id }) => {
  const cardList = useCardStore((prev) => prev.cardList[columnId]);
  const cardItemData = cardList?.cards.find((card) => card.id === id);

  return { cardItemData };
};

export default useCardFetchData;
