type ActionType = { type?: string; payload?: Object };

type ReducerType = { [key: string]: Function };

export function combineReducers(reducers: ReducerType = {}) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers: ReducerType = {};

  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  const finalReducerKeys = Object.keys(finalReducers);
  return (state: ReducerType = {}, action: ActionType = {}) => {
    let hasChanged = false;
    const nextState: ReducerType = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
