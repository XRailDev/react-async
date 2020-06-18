import React from 'react';
import Item from 'modules/user/containers/Item/index.jsx';

class  List extends React.Component {
    renderItem = (id) => <Item id={id} key={id} />

    render() {
        return (
            <table>
                <tbody>
                {this.props.list.map(this.renderItem)}
                </tbody>
            </table>
        )
    };
}

export default List;
