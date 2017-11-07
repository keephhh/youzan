import {createAction, Action} from 'redux-actions';

export const CHANGE_RECORD_STATUS = "CHANGE_RECORD_STATUS";
const changeRecordStatus = createAction(CHANGE_RECORD_STATUS);


export {
    changeRecordStatus
}