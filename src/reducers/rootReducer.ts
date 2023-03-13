import { alertReducer } from './alertReducer';
import { changeCompanyReducer } from './changeCompanyReducer';
import { combineReducers } from './combineReducers';

const rootReducer = combineReducers({
  changeCompany: changeCompanyReducer,

  alerts: alertReducer,
});

export default rootReducer;
