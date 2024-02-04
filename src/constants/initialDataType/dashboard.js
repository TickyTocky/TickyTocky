export const INIT_DASHBOARD_DATA = {
  id: 0,
  title: '',
  color: '',
  createdAt: '',
  updatedAt: '',
  createdByMe: false,
  userId: 0,
};

export const INIT_DASHBOARDS_DATA = {
  dashboards: [{ ...INIT_DASHBOARD_DATA }],
};

export const INIT_DASHBOARD_INVITATION_DATA = {
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
  inviteAccepted: true,
  createdAt: '',
  updatedAt: '',
};

export const INIT_DASHBOARD_INVITATIONS_DATA = {
  totalCount: 0,
  invitations: [
    {
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
    },
  ],
};
