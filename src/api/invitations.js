import useInvitationStore from '@/stores/useInvitationStore';
import { INVITATION_API } from '@/constants';
import instance from './axios';

const Invitation = {
  get: async (size) => {
    const res = await instance.get(INVITATION_API, { params: { size } });
    if (res.status === 200) {
      useInvitationStore.setState((prev) => ({
        ...prev,
        invitationList: res.data.invitations,
      }));
      return res;
    }
  },
  search: async (size, title) => {
    const res = await instance.get(INVITATION_API, { params: { size, title } });
    if (res.status === 200) {
      useInvitationStore.setState((prev) => ({
        ...prev,
        searchResult: res.data.invitations,
      }));
      return res;
    }
  },
  respond: (invitationId, inviteAccepted) =>
    instance.put(`${INVITATION_API}/${invitationId}`, inviteAccepted),
};

export default Invitation;
