function Event() {
  this.on = () => {
    console.log('events callback');
  };

  this.trigger = () => {
    console.log('trigger events');
  };
}

export default {
  process: {
    fetchSpecificAlias() {
      console.log('fetchSpecificAlias');
    }
  },
  events: {
    beforeFetchHomepage: new Event()
  }
};
