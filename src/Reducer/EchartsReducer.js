import {handleActions, handleAction} from 'redux-actions';

import {
    CHANGE_RECORD_STATUS
} from '../Action/RecordAction';

const initialState = {
    item: [
        {
            value: [10,12,13,14,15,12,13],
            label: "商品浏览量",
        },
        {
            value: [10,12,13,14,15,12,13],
            label: "商品访客数",
        },
        {
            value: [10,12,13,14,15,12,13],
            label: "浏览量",
        },
    ]
}
export default handleActions({
    [CHANGE_RECORD_STATUS]: (state) => {
        let item = state.item;
    }
},initialState)

