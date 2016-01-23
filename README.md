# Codelation Assets

A collection of SCSS mixins and JavaScript helpers used by
[Codelation](https://codelation.com) for building awesome Rails apps quickly.

## Installation

Add this line to your application's Gemfile:

```ruby
gem "codelation_assets"
```

Install the Codelation Assets gem with Bundler:

```bash
bundle install
```

## Usage

### JavaScript

Add to `application.js`:

```javascript
//= require codelation
```

#### App Functions

The `App` object is used in Codelation's Rails projects to register components that
need to be initialized on every page and to sprinkle in JavaScript on specific pages.

##### Registering JavaScript Components

By using `App.register('component')`, you can fire some JavaScript on every page load.

The function passed to `enter` will fire for `$(document).on('ready page:load')`, so
it will work with or without Turbolinks.

The function passed to `exit` will fire for `$(document).on('page:before-unload')`,
so it will only work with Turbolinks, but will not be needed when not using Turbolinks.

Example:

```javascript
(function() {
  "use strict"

  var body, links;

  App.register('component').enter(function() {
    body = $('body');
    links = $('a[href]:not([href^="#"]):not([target="_blank"])');

    // Add 'loading' class to the body when a link is clicked,
    // add add 'active' class to the clicked link.
    links.click(function() {
      links.removeClass('active');
      body.addClass('loading');
      $(this).addClass('active');
    });
  }).exit(function() {
    // Remove the classes when the body is unloaded
    body.removeClass('loading');
    links.removeClass('active');
  });
})();
```

##### Registering Per Page JavaScript Snippets

You can use `App.register('[controller-name].[action-name]')` to fire some JavaScript any time
that page is loaded and unloaded. The `enter` and `exit` functions work the same as components.

Example:

```javascript
(function() {
  "use strict"

  var refreshInterval;

  // This will only fire when entering and exiting the `AwesomeStatsController#index` page.
  App.register('awesome-stats.index').enter(function() {
    // Poll a URL for new data at a set interval
    refreshInterval = setInterval(pollStats, 5000);
  }).exit(function() {
    // Clear the interval when the page is unloaded
    clearInterval(refreshInterval);
  });
})();
```

You can also use `App.register('[controller-name]')` to fire JavaScript on all pages
for the given controller name.

### Sass

Add to `application.scss`:

```scss
@include "codelation";
```

#### Included Sass/CSS Libraries

- [Bourbon](http://bourbon.io) - A simple and lightweight mixin library for Sass.
- [Normalize.css](https://necolas.github.io/normalize.css/) - A modern, HTML5-ready alternative to CSS resets

#### Additional Functions and Mixins

A handful of useful Sass functions and mixins written by Codelation are also included.

##### Sass Functions

**color($color, $number: 500)**

The [Google Material Design Colors](https://www.google.com/design/spec/style/color.html) come in handy when you
need a color for creating application interfaces. They are a much better alternative to CSS's named colors
(blue, green, red, etc.), but just as easy to use.

Examples:

```scss
// The named colors are available as variables of the same name
.warning {
  color: $amber;
}

// You can also use the different shades available
.error {
  color: ($red, 700);
}

// @see https://www.google.com/design/spec/style/color.html
.success {
  color: ($green, 600);
}
```

**text-color($color)**

This function is useful for creating mixins where you have a background color as a variable
and need to display either black or white text on top of the given color.

##### Sass Mixins

**@mixin button($background-color: color($grey, 100), $color: color($grey, 800), $active-background-color: $accent-color, $active-color: text-color($accent-color))**

By default, this will create a plain grey button. It is close to the default button in some browsers, but will
actually be rendered the same across all browsers. Useful for applications that need to be obvious about
a button looking like a button.

**center-children**

This mixin uses flexbox to center the child elements horizontally and vertically inside the element.
A good use case is centering an image of unknown height inside a container with a fixed height.

**has-cards($columns, $margin: 0)**

This mixin uses flexbox to create a cards layout like that used by Google Material Design. The
mixin is used on the container element. This will create a fixed margin between each card element
and adds padding around the outside of the cards. Useful for creating a dashboard widgets look.

Example:

```html
<div class="dashboard">
  <div class="card"><div>
  <div class="card"><div>
  <div class="card"><div>
  <div class="card"><div>
</div>
```

```scss
// This will create a cards layout with two cards per row.
// There will be a fixed margin of 1em between and around the cards.
// The cards in each row will stretch to be the same height.
.dashboard {
  @include has-cards(2, 1em);
  background-color: #ccc;

  .card {
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
}
```

**has-columns($columns, $gutter: 0)**

This mixin uses flexbox to create a layout with the specified number of columns
that stretch to fill the container's height. The given gutter size will the margin
between the columns. There is no need to set a margin-right of 0 to the nth-child
or anything like that. Flexbox rules!

Example:

```html
<div class="row">
  <div class="column"><div>
  <div class="column"><div>
  <div class="column"><div>
</div>
```

```scss
// This will create a layout with three columns.
// The columns will all fill the container height.
// There will be a fixed gutter of 12px between the columns.
.row {
  @include has-columns(3, 12px);
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
