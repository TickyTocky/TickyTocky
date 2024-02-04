export const INIT_INVITATION_DATA = {
  id: 0,
  inviter: {
    nickname: '',
    email: '',
    id: 0,
  },
  teamId: '',
  dashboard: {
    title: '',
    id: 0,
  },
  invitee: {
    nickname: '',
    email: '',
    id: 0,
  },
  inviteAccepted: false,
  createdAt: '',
  updatedAt: '',
};

export const INIT_INVITATIONS_DATA = {
  cursorId: 0,
  invitations: [{ ...INIT_INVITATION_DATA }],
};
