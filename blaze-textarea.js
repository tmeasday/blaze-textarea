if (Meteor.isClient) {
  Template.input.value = new ReactiveVar('X');

  Template.input.helpers({
    value: function () {
      return Template.input.value.get();;
    }
  });

  Template.input.events({
    'keyup': function (e) {
      Template.input.value.set(e.target.value);
    }
  });

  Template.textarea.value = new ReactiveVar('X');
  Template.textarea.helpers({
    value: function () {
      return Template.textarea.value.get();;
    }
  });

  Template.textarea.events({
    'keyup': function (e) {
      Template.textarea.value.set(e.target.value);
    }
  });
}

