import useCardStore from '@/stores/useCardStore';
import { CARD_API, COLUMN_API } from '@/constants';
import instance from './axios';

const Cards = {
  create: (value) => instance.post(CARD_API, value),
  get: async (cardId) => {
    const res = await instance.get(`${CARD_API}/${cardId}`);
    if (res.status === 200) {
      useCardStore.setState((prev) => ({ ...prev, card: res.data }));
      return res;
    }
  },
  getList: async (size, columnId) => {
    const res = await instance.get(CARD_API, { params: { size, columnId } });
    if (res.status === 200) {
      useCardStore.setState((prev) => ({
        ...prev,
        cardList: res.data.cards,
        totalCount: res.data.totalCount,
      }));
      return res;
    }
  },
  edit: (cardId, value) => instance.put(`${CARD_API}/${cardId}`, value),
  delete: (cardId) => instance.delete(`${CARD_API}/${cardId}`),
  addCardIamge: async (columnId, value) => {
    const formData = new FormData();
    formData.append('file', value);
    const res = await instance.post(`${COLUMN_API}/${columnId}/card-image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (res.status === 201) {
      return res.imageUrl;
    }
  },
};

export default Cards;
