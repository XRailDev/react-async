import React from 'react';
import User from 'modules/user/containers/user/index.jsx';
import {Provider} from 'react-redux';
import initStore from 'store.js';

const store = initStore();

class  App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <User />
        </Provider>
        )
  };
}

export default App;
