if (Meteor.isClient) {
  var value = new ReactiveVar('X');

  Template.hello.helpers({
    value: function () {
      return value.get();;
    }
  });

  Template.hello.events({
    'keyup': function (e) {
      value.set(e.target.value);
    }
  });
}

