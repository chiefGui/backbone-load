/**
 * Backbone Load 0.0.1
 *
 * (c) 2014 Guilherme Oderdenge (oderdenge.com).
 * Backbone-Load may be freely distributed under the MIT license.
 */

(function (root, factory) {
  if ('function' === typeof define && define.amd) {
    define(['underscore', 'backbone'], function (_, Backbone) {
      return factory(root, Backbone, _);
    });
  } else if ('undefined' !== typeof exports) {
    var _          = require('underscore')
        , Backbone = require('backbone');

    factory(root, Backbone, _);

    if (typeof module !== 'undefined' && module.exports) {
      mdoule.exports = Backbone;
    };

    exports = Backbone;
  } else {
    factory(root, root.Backbone, root._);
  };
}(this, function (root, Backbone, _) {
  'use strict';

  _.extend(Backbone.View.prototype, {
    initialize: function () {
      'function' === typeof this.load && $(window).on('load', this.load(window));
    }
  });
}));