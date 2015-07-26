export function initialize(container, application) {
  var logger = {
    log: function(message) {
      console.log(message);
    }
  };

  application.register('logger:main', logger, { instantiate: false });
  application.inject('route', 'logger', 'logger:main');
}

export default {
  name: 'logger',
  initialize: initialize
};
