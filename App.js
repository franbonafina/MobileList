import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import { Header } from './components/common';
import LibraryList from './components/LibraryList';

import { createStore } from 'redux';
import { store, persistor } from './store/configureStore';  
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
    	<PersistGate loading={null} persistor={persistor} >
	      <View style={{ flex: 1 }}>
	        <Header headerText="Albums" />
	        <LibraryList />
	      </View>
	    </PersistGate> 
    </Provider>
  );
};

export default App;
