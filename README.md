# Backbone-Load.js

If you need to load stuff when window loads, this is the way to go.

### Motivation

Basically, I created this piece of code just to solve a problem that I had
with [Masonry](http://masonry.desandro.com/) and Backbone. I hope it can
be useful for you, too.

### Requirements

- jQuery
- Underscore.js
- Backbone.js

### Download

You just need the file on `/js/backbone-load.js/", or, of course, its minified
version.

### Installation

On your markup, just after Underscore.js/Backbone.js calls:

`<script type="text/javascript" src="/path/to/backbone-load.js">`

### Usage

To use Backbone-Load, you don't need to be a NASA's engineer. Actually, it is
really easy to use. See:

```js
<script>
var view = new Backbone.View.extend({
  load: function () {
    alert('hello!');
  }
});
</script>
```

If you want to access the window's property inside load's scope, you just
need to call its parameter, such as:

```js
<script>
  // ...
  load: function (w) {
    alert(w); // Window will be the output
  }
  // ...
});
</script>
```

Sounds sweet, huh?

### Tests

To perform your tests, feel free to do it through `/tests/SpecRunner.html`,
exploding the file in your browser.

### Comprehension

I got a horrible problem when using Backbone with Masonry. Then, I started
to search a precise solution and I lost lots of time trying to find
a good way to solve the problem.

Tic-tac, the clock ticks – finally I thought to resolve the problem by myself.
I learned some conventions and how can `$(window).load(x, y)` obstruct
Backbone's concept. Then, the way I made, using the primivite initializator,
nothing's lost. It's just a counterpart to not bubble nothing else in your
architecture. Take a look onto my code and feel free to give ideas or even
make a pull request. :-)

### License

MIT.