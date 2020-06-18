import {reduxActions} from 'modules/user/constans';

export function closeUser() {
    return {
        type: reduxActions.close,
    }
}

export function editUser(user) {
    return {
        payload: {user},
        type: reduxActions.edit,
    }
}

export const deleteUser = (user) => {
    return {
        type: reduxActions.delete,
        payload: {user},
    }
}

export function loadUser() {
    return async function(dispatch) {
        const response = await fetch('/api/v1/user');
        const json = await response.json();
        const userList = json.data.list;
        const data = userList.reduce(getData, {});
        const list = userList.map(getList);
        dispatch({
            payload: {
                data, list
            },
            type: reduxActions.load,
        });
    }
}

function getData(prev, user) {
    return {
        ...prev,
        [user.id]: user,
    }
}

function getList(user) {
    return user.id;
}

export function saveUser(user) {
    return {
        payload: {user},
        type: reduxActions.save,
    }
}
