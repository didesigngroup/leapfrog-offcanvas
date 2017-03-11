## Templates

All of the HTML in this pattern library uses the [Handlebars](http://handlebarsjs.com) template syntax. The templates make heavy use of _helpers_. In addition to [the defaults](http://handlebarsjs.com/builtin_helpers.html) included in the Handlebars library, extra third-party helpers are used to introduce more specific rendering logic in some templates.

### Helper examples

**`defaultTo`** is an _inline_ helper that outputs the second argument if the first one is undefined.

```html
<div class="alert {{defaultTo class "alert-info"}}">
  ...
</div>
```

**`#compare`** is a _block_ helper that conditionally outputs content depending on the value of the expression supplied by its three arguments. In this case, the button will only be rendered when _day_ equals _3_.

```html
{{#compare day "==" 3}}
  <button class="di-calendar__choice is-targeted" type="button">
    {{day}}
  </button>
{{/compare}}
```

**`#block`** is a block helper that allows default (or placeholder) content blocks to be defined within template partials, so that they can be overridden if needed.

```html
<button class="di-button {{class}}">
  {{#block "content"}}
    Default Button
  {{/block}}
</button>
```

**`#embed`** and **`#content`** are block helpers that allow _base_ partials to be embedded with new inner content blocks that override the defaults.

```html
{{#embed "button.base" class="di-button--large"}}
  {{#content "content"}}
    Large Button
  {{/content}}
{{/embed}}
```

For examples and documentation of the helpers used in this pattern library, see:

- https://github.com/cloudfour/core-hbs-helpers/tree/master/lib
- https://github.com/shannonmoeller/handlebars-layouts

### Additional resources

- http://tryhandlebarsjs.com
- http://webapplog.com/handlebars
- http://handlebarsjs.com/builtin_helpers.html