import getIngredients from "../../utils/burger-api.js";


const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

function getOrder(props) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_REQUEST
        });
        getIngredients(props).then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_ORDER_SUCCESS,
                    order: res.order
                });
            } else {
                dispatch({
                    type: GET_ORDER_FAILED
                });
            }
        });
    };
}

export default (GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED, getOrder);