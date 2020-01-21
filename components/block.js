"use strict";
polarity.export = PolarityComponent.extend({
  details: Ember.computed.alias("block.data.details"),

  actions: {
    changeTab: function(tabName) {
      this.set("activeTab", tabName);
    }
  }
});
