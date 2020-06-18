import React from 'react';
import {loadUser} from 'modules/user/actions';
import List from 'modules/user/containers/List/index.jsx';
import Form from 'modules/user/containers/Form/index.jsx';
import {actions} from 'modules/user/constans';
import {connect} from 'react-redux'
import {userSelectorAction} from 'modules/user/selectors';
import {userSelectorListSort} from 'modules/user/selectors';

class  User extends React.Component {
    constructor(props) {
        super(props);
        this.props.loadUser();
    }

    render() {
        const {action, list} = this.props;
        if (action === actions.list){
            return <List list={list} />
        }

        if (action === actions.edit){
            return <Form />
        }

        return null;
    };
}

export default connect(
    (state) => ({
            action: userSelectorAction(state),
            list: userSelectorListSort(state),
    }),
    {
        loadUser,
    }
)(User);
