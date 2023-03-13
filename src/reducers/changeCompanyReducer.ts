type ChangeCompanyType = {
  from: string;
  to: string;
  display: boolean;
};

type ActionType = {
  type: 'on' | 'off';
  payload: ChangeCompanyType;
};

const initialState = {
  from: '',
  to: '',
  display: false,
};

export const changeCompanyReducer = (
  state: ChangeCompanyType = initialState,
  action: ActionType = {
    type: 'on',
    payload: {
      from: '',
      to: '',
      display: false,
    },
  }
) => {
  switch (action.type) {
    case 'on':
      return {
        ...state,
        from: action.payload.from,
        to: action.payload.to,
        display: true,
      };

    case 'off':
      return {
        ...state,
        display: false,
      };

    default:
      return state;
  }
};
