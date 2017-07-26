import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configStore(initState) {
 return createStore(
   rootReducer,
   initState,
   applyMiddleware(reduxImmutableStateInvariant()));
}
