import openData from './data-mock.js';

function Event() {
  this.on = () => {
    console.log('events callback');
  };

  this.trigger = () => {
    console.log('trigger events');
  };
}

export default {
  openData,
  process: {
    showSKU(type) {
      return Promise.resolve();
    },
  },
  events: {
    beforeCartSubmit: new Event(),
    afterBuy: new Event(),
  }
};
