import { useContext } from 'react';
import { AppContext } from '../context/appContext';

const useStore = () => useContext(AppContext);

export default useStore;
