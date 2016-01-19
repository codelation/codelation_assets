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

###### color($color, $number: 500)

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

###### text-color($color)

This function is useful for creating mixins where you have a background color as a variable
and need to display either black or white text on top of the given color.

##### Sass Mixins

###### button($background-color: color($grey, 100), $font-color: $grey, $active-background-color: $accent-color, $active-font-color: text-color($accent-color))

By default, this will create a plain grey button. It is close to the default button in some browsers, but will
actually be rendered the same across all browsers. Useful for applications that need to be obvious about
a button looking like a button.

###### center-children

This mixin uses flexbox to center the child elements horizontally and vertically inside the element.
A good use case is centering an image of unknown height inside a container with a fixed height.

###### has-cards($columns, $margin: 0)

TODO: Write description/usage

###### has-columns($columns, $gutter: 0)

TODO: Write description/usage

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
