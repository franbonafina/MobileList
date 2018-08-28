import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import { Header } from './components/common';
import LibraryList from './components/LibraryList';

import Store from './store/configureStore';  
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={Store.store}>
    	<PersistGate loading={null} persistor={Store.persistor} >
	      <View style={{ flex: 1 }}>
	        <Header headerText="Albums" />
	        <LibraryList />
	      </View>
	    </PersistGate> 
    </Provider>
  );
};

export default App;
