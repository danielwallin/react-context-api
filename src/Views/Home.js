import React from 'react';
import Header from '~/Components/Header';
import Filter from '~/Components/Filter';
import { renderStars } from '~/Shared/utils';
import { AppConsumer } from '~/Providers/RootProvider';
import { withRouter } from 'react-router-dom';
import './Home.scss';

const Home = withRouter(({ history }) => {
  const filteritems = data => {
    return data.state.items.filter(item => {
      if (!data.state.filter.price.low && !data.state.filter.price.high) {
        return true;
      } else {
        return item.price >= data.state.filter.price.low && item.price <= data.state.filter.price.high;
      }
    });
  };

  const renderEmpty = () => <div className='saloon-list--empty'>Inga matchningar</div>;

  const renderList = data => {
    return (
      <div className='saloon-list'>
        {data.map(item => {
          return (
            <div
              key={item.id}
              onClick={() => {
                history.push(`/salon/${item.id}`);
              }}
              className='saloon-list--item'
            >
              <span>{item.time.opening}</span>
              <div className='saloon-list--col middle'>
                <h3 className='saloon-list--title'>{item.title}</h3>
                <div className='saloon-list--stars txt-small'>
                  {renderStars(item.score)} <span class='c-muted txt-small'>({item.reviews})</span>
                </div>
                <span className='saloon-list--location c-muted txt-medium'>{item.location}</span>
              </div>
              <div className='saloon-list--col'>
                <h4 className='saloon-list--price'>{item.price} kr</h4>
                <span className='saloon-list--location c-muted'>{item.mn} mn</span>
              </div>
              <div className='saloon-list--forward'>
                <ion-icon name='ios-arrow-forward'></ion-icon>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <AppConsumer>
      {data => {
        const filteredItems = filteritems(data);
        return (
          <React.Fragment>
            <Header
              className='home-header'
              title='Hår'
              left={<ion-icon class='header--back cursor c-primary' name='ios-arrow-back'></ion-icon>}
              right={<ion-icon class='header--filter c-primary' name='options'></ion-icon>}
            />
            <Filter value={`${data.state.filter.price.low} - ${data.state.filter.price.high}`} />
            <main className='home'>
              {filteredItems.length > 0 && renderList(filteredItems)}
              {filteredItems.length == 0 && renderEmpty(filteredItems)}
            </main>
          </React.Fragment>
        );
      }}
    </AppConsumer>
  );
});

export default Home;
