Fields = new Mongo.Collection('fields');

if (Meteor.isClient) {
  Template.welcome.helpers({
    welcomeMessage: function() {
      return Fields.find({"_id" : "1"}).fetch()[0].welcomeMessage;
    },
  });
  Template.welcome.events({
    'blur #welcome': function (event, template) {
      Fields.update({"_id" : "1"}, {$set : {"welcomeMessage" : event.currentTarget.value}});
    }
  });

  Template.description.helpers({
    descriptionMessage: function() {
      return Fields.find({"_id" : "1"}).fetch()[0].descriptionMessage;
    },
  });
  Template.description.events({
    'blur #description': function (event, template) {
      Fields.update({"_id" : "1"},{$set : {"descriptionMessage" : event.currentTarget.value}});
    }
  });
}

if (Meteor.isServer) {
  Fields.remove({"_id" : "1"});
  Fields.insert({"_id" : "1", "welcomeMessage" : "Welcome to Digitech", "descriptionMessage" : "Digitech is the awesome way to learn how to code"})
}
