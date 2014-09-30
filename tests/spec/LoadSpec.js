describe('Backbone-Load', function () {
  var guineaPig;

  it('should say "hello" when window loads', function () {
    var v = Backbone.View.extend({
      load: function () {
        guineaPig = 'hello';
      }
    });

    new v;

    expect(guineaPig).toBe('hello');
  });

  it('should has window as scope parameter', function () {
    var v = Backbone.View.extend({
      load: function (scope) {
        guineaPig = scope;
      }
    });

    new v;

    expect(guineaPig).toBe(window);
  });

  it('should be able to access its properties', function () {
    var v = Backbone.View.extend({
      load: function () {
        guineaPig = this;
      }
    });

    new v;

    expect(guineaPig).not.toBe(null);
    expect(guineaPig).not.toBe('undefined');
    expect(typeof guineaPig.$el).toBe('object');
  });
});