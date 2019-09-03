import React from 'react';

export const renderStars = score => {
  return [...Array(5)].map((i, n) => {
    return n + 1 <= score ? <ion-icon name='ios-star' /> : <ion-icon name='ios-star-outline' />;
  });
};
