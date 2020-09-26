import Auth from './auth';
import Chat from './chat';
import { combineReducers } from 'redux';

export default combineReducers({
    auth: Auth,
    chat: Chat
});