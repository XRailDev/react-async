import {userModuleName} from 'modules/user/constans';
import {createSelector} from 'reselect';

export function userSelector(state) {
    return state[userModuleName];
}

export function userSelectorAction(state){
    return userSelector(state).action;
}

export function userSelectorId(state){
    return userSelector(state).id;
}

export function userSelectorData(state){
    return userSelector(state).data;
}

export function userSelectorList(state){
    return userSelector(state).list;
}

export function userSelectorItem(state, id){
    return userSelectorData(state)[id];
}

export function userSelectorItemCurrent(state){
    return userSelectorData(state)[userSelectorId(state)];
}

export const userSelectorListSort = createSelector(
    [userSelectorList, userSelectorData],
    (list, data) =>  list.sort((a, b) => {
            const  userA = data[a];
            const userB = data[b];
            const fullNameA = `${userA.firstName}${userA.lastName}`;
            const fullNameB = `${userB.firstName}${userB.lastName}`;

            if(fullNameA < fullNameB) {
                return -1;
            }
            if(fullNameA > fullNameB) {
                return 1;
            }
            return 0;
        })
);
