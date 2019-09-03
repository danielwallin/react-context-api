import React from 'react';
import RootProvider from '~/Providers/RootProvider';
import Router from '~/Router';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <RootProvider>
        <Router />
      </RootProvider>
    </div>
  );
};

export default App;
