import * as actions from "../actions/actions";
import * as requests from "../requests/requests";

export const getRequest = (option) => async (dispatch) => {
    dispatch(actions.startAction(option.toUpperCase(), 'GET')());
    try {
        const result = await requests.getData(option);
        dispatch(actions.successAction(option.toUpperCase(), 'GET')(result));
    } catch (e) {
        dispatch(actions.failureAction(option.toUpperCase(), 'GET')('Error'));
    }
}

export const postRequest = (option, data) => async (dispatch) => {
    dispatch(actions.startAction(option.toUpperCase(), 'POST')());
    try {
        const result = await requests.postData(data, option);
        dispatch(actions.successAction(option.toUpperCase(), 'POST')(result));
    } catch (e) {
        dispatch(actions.failureAction(option.toUpperCase(), 'POST')('Error'));
    }
}

export const putRequest = (option, data) => async (dispatch) => {
    dispatch(actions.startAction(option.toUpperCase(), 'PUT')());
    try {
        const result = await requests.putData(data, option);
        dispatch(actions.successAction(option.toUpperCase(), 'PUT')(result));
    } catch (e) {
        dispatch(actions.failureAction(option.toUpperCase(), 'PUT')('Error'));
    }
}

export const deleteRequest = (option, data) => async (dispatch) => {
    dispatch(actions.startAction(option.toUpperCase(), 'DELETE')());
    try {
        const result = await requests.deleteData(data, option);
        console.log(result)
        dispatch(actions.successAction(option.toUpperCase(), 'DELETE')(result));
    } catch (e) {
        dispatch(actions.failureAction(option.toUpperCase(), 'DELETE')('Error'));
    }
}