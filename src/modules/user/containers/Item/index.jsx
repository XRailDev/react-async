import React from 'react';
import {connect} from 'react-redux';
import {editUser} from 'modules/user/actions';
import {userSelectorItem} from 'modules/user/selectors';
import {deleteUser} from 'modules/user/actions';

class  Item extends React.Component {
    onEdit = () => {
        this.props.editUser(this.props.user);
    }

    onDelete = () => {
        this.props.deleteUser(this.props.user);
    }

    render() {
        const {user} = this.props;
        const fullName = `${user.firstName} ${user.lastName}`;
        return (
            <tr>
                <td>
                   <img src={user.picture} alt={fullName} />
                </td>
                <td>{fullName}</td>
                <td>{user.company}</td>
                <td>
                    <a href={`mailTo:${user.email}`}>{user.email}</a>
                </td>
                <td>
                    <button onClick={this.onEdit}>edit</button>
                </td>
                <td>
                    <button onClick={this.onDelete}>
                         Remove
                    </button>
                </td>
            </tr>
        )
    };
}

export default connect(
    (state, props) => ({
        user: userSelectorItem(state, props.id),
    }),
    {
        editUser,
        deleteUser
    }
)(Item);
