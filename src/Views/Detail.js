import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '~/Components/Header';
import { AppConsumer } from '~/Providers/RootProvider';
import { renderStars } from '~/Shared/utils';
import './Detail.scss';

const Detail = withRouter(({ history }) => {
  useEffect(() => window.scroll(0, 0), []);

  const getData = (data, id) => {
    for (const item of data) {
      if (item.id == id) {
        return item;
      }
    }
  };

  return (
    <AppConsumer>
      {data => {
        // TODO: change how we get the params
        const pathname = history.location.pathname.split('/');
        const id = pathname[pathname.length - 1];
        const item = getData(data.state.items, id);

        return (
          <React.Fragment>
            <Header
              className='detail-header'
              left={
                <ion-icon
                  class='header--back cursor c-light'
                  onClick={() => {
                    history.push('/');
                  }}
                  name='ios-arrow-back'
                ></ion-icon>
              }
              right={<ion-icon class='c-light' name='ios-heart-empty'></ion-icon>}
            >
              <div className='detail-hero'>
                <div className='detail-hero-img' style={{ backgroundImage: `url(${item.img})` }}></div>
                <div class='detail-hero-content'>
                  <h3 className='detail-hero-content--title'>{item.title}</h3>
                  <div className='detail-hero-content--stars'>
                    {renderStars(item.score)}
                    <span className='c-light txt-small'>({item.reviews})</span>
                  </div>
                </div>
              </div>
            </Header>
            <div className='detail'>
              <div className='detail-tabs'>
                <button className='detail-tabs--item txt-medium active'>Info</button>
                <button className='detail-tabs--item txt-medium'>Schema</button>
              </div>
              <div className='detail-info'>
                <div className='detail-info-item'>
                  <ion-icon name='ios-pin'></ion-icon>
                  <span>{item.location}</span>
                </div>
                <div className='detail-info-item'>
                  <ion-icon name='ios-time'></ion-icon>
                  <span>Öppet idag till {item.time.closing}</span>
                  <ion-icon class='c-primary' name='ios-arrow-down'></ion-icon>
                </div>
                <div className='detail-info-item'>
                  <ion-icon name='ios-call'></ion-icon>
                  <span>{item.tel}</span>
                </div>
                <div className='detail-info-item'>
                  <ion-icon name='ios-globe'></ion-icon>
                  <span>{item.website}</span>
                </div>
              </div>
              <div className='detail-desc'>
                <p>{item.description}</p>
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </AppConsumer>
  );
});

export default Detail;
