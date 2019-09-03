import React from 'react';
import data from '~/Mock/data.json';
const AppContext = React.createContext();

export const AppConsumer = AppContext.Consumer;

export default class AppProvider extends React.Component {
  state = {
    items: data,
    filter: {
      price: {
        high: null,
        low: null,
      },
      selected: 0,
    },
  };
  actions = {
    set: state => {
      this.setState(state);
    },
  };

  render() {
    return <AppContext.Provider value={{ state: this.state, actions: this.actions }}>{this.props.children}</AppContext.Provider>;
  }
}
