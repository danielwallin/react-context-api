import React, { useRef } from 'react';
import { AppConsumer } from '~/Providers/RootProvider';
import './Filter.scss';

const options = [
  {
    label: 'Inget',
    value: {
      high: null,
      low: null,
    },
  },
  {
    label: 'Pris 0 - 100 kr',
    value: {
      high: 100,
      low: 0,
    },
  },
  {
    label: 'Pris 100 - 250 kr',
    value: {
      high: 250,
      low: 100,
    },
  },
  {
    label: 'Pris 250 - 400 kr',
    value: {
      high: 400,
      low: 250,
    },
  },
];
/* TODO: Make this component more generic */

const Filter = props => {
  const select = useRef(null);

  const renderOptions = () => {
    return options.map((val, index) => {
      return <option value={index}>{val.label}</option>;
    });
  };

  const onChange = (data, event) => {
    event.persist();
    data.actions.set({ filter: { price: options[event.target.value].value, selected: event.target.value } });
  };

  return (
    <AppConsumer>
      {data => {
        return (
          <div className='filter'>
            <select ref={select} value={data.state.filter.selected} onChange={onChange.bind(this, data)}>
              {renderOptions()}
            </select>
            <ion-icon class='filter-dropdown--icon c-primary' name='ios-arrow-down' />
          </div>
        );
      }}
    </AppConsumer>
  );
};

export default Filter;
