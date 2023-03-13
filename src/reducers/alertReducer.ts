type AlertType = {
  id?: string;
  display: boolean;
  onClose?: () => void;
  text: string;
  type?: 'success' | 'info' | 'warning' | 'danger';
  title?: string;
};

type ActionType = {
  type: 'alertsOn' | 'alertsOff';
  payload: AlertType;
};

const intialState: AlertType = {
  display: false,
  text: '',
  id: '',
  type: undefined,
  title: '',
};

export const alertReducer = (
  state: AlertType = intialState,
  action: ActionType = {
    type: 'alertsOff',
    payload: {
      id: undefined,
      display: false,
      onClose: undefined,
      text: '',
      type: undefined,
      title: undefined,
    },
  }
) => {
  switch (action.type) {
    case 'alertsOn':
      return {
        ...state,
        text: action.payload.text,
        type: action.payload.type,
        onClose: action.payload.onClose,
        display: true,
      };

    case 'alertsOff':
      return {
        ...state,
        display: false,
      };

    default:
      return state;
  }
};
