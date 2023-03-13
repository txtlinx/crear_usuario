import { createContext, useReducer } from 'react';
import rootReducer from '../reducers/rootReducer';

export const AppContext = createContext<Array<any>>([]);

type AppProviderProps = {
  children: string | JSX.Element | JSX.Element[];
};

const AppProvider = ({ children }: AppProviderProps) => {
  const initialState = rootReducer(undefined, { type: '__INIT__' });
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
