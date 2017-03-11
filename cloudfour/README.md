[Autoprefixer]: https://github.com/postcss/autoprefixer
[Babel]: https://babeljs.io
[Browsersync]: http://www.browsersync.io
[Fabricator]: http://fbrctr.github.io
[Gulp]: https://github.com/gulpjs/gulp
[Handlebars]: http://handlebarsjs.com
[Jekyll]: https://jekyllrb.com
[netlify]: http://www.netlify.com
[Node.js]: http://nodejs.org
[npm]: http://npmjs.com
[Sass]: http://sass-lang.com
[webpack]: https://webpack.github.io
[YAML front matter]: http://assemble.io/docs/YAML-front-matter.html
[handlebars-layouts]: https://github.com/shannonmoeller/handlebars-layouts

# Digital Insight Pattern Library

> A pattern library and prototyping tool for creating and documenting responsive components.

## Getting started

### Download and install [Node.js]:

This project requires [Node.js] `v4.0.0` or later, and [npm] `2.7.0` or later. If you already have Node.js installed, you can verify the versions by running:

```sh
node -v
npm -v
```

### Clone the project:

```sh
git clone git@github.com:cloudfour/digital-insight.git
```

### Run the project locally:

```sh
cd digital-insight
npm start
```

**Note:** This will take a few minutes to complete when run for the first time. This is due to packages being downloaded.

### View the project locally:

When the development server is started, the pattern library will be served at <http://localhost:3000>.

***

## Overview

> What this pattern library does, and how it's organized.

### Build process

The build process for this pattern library uses [Gulp], and consists of a small collection of [tasks](https://github.com/gulpjs/gulp/blob/master/docs/API.md) that run either in sequence or in parallel. They are responsible for:

- Transforming and combining CSS and JavaScript files
- Rendering HTML templates with pattern library data
- Controlling a local web server for development

### CSS processing

This pattern library uses [Sass] to process stylesheets, with some additional plugins.

### HTML processing

This pattern library uses [Handlebars] for template rendering. We like it for its straightforward syntax and wide adoption.

##### Added features:
- Local template data can be added with [YAML front matter].
- [Custom helper functions](https://github.com/cloudfour/core-hbs-helpers/tree/master/lib) exist to encapsulate template logic.
- Template layouts are also supported via the [handlebars-layouts] helper suite.

### Content handling and organization

This pattern library is based on a customized version of [Fabricator]. We like it for its handling of content and data organization.

- It's similar to "static site generators" like [Jekyll].
- It provides special treatment of documentation pages.
- It can be used for simple demos, or for complex style guides.

### Javascript processing

This pattern library uses [webpack] for JavaScript dependency management and bundling. We like it for its ability to handle all of the [module](http://addyosmani.com/writing-modular-js/) formats.

##### Plugins:
- [Babel] transforms new JavaScript syntax (ES6/ES2015) into JavaScript that is compatible with older browsers.

### Previewing changes

This pattern library supports automatic browser refreshing with a combination of [Browsersync] and file watching. When source files change, their associated tasks are run, and Browsersync is notified.

##### Features:
- Multiple browsers on multiple devices can be synchronized.
- A dashboard UI is also provided for manual browser control.

***

## Deployment

The `master` branch is continuously and automatically deployed to [netlify]. The `gulp build` task is run to generate the site on netlify. Any commits or PR merges to `master` will cause a new build to be deployed (yay!).

URL: http://digital-insight-patterns.netlify.com

This site is **password-protected**. The password is available upon request.

***

## Contributing

### Create a new branch

Follow a naming convention of `prefix-short_description`, using `prefix` to categorize the change you're making as a new feature, bug fix, or minor maintenance. Common prefixes include `feature`, `fix`, `chore`, etc.

```sh
git checkout dev
git checkout -b feature-new_button_variation
```

### Make changes and commit them

Repeat this process for each distinct change you make.

```sh
git commit -am "Add new button variation class"
```

### Push your new branch

```sh
git push origin feature-new_button_variation
```

### Submit a Pull Request

0. Go to https://github.com/cloudfour/digital-insight/pulls and choose "New pull request".
0. Make sure the "base" is `dev`, and choose your new branch for "compare".
0. Assign somebody to own the review process, and `@`-mention anyone else who can help out.
0. Once the pull request is approved (:+1:), merge it by clicking the green button.
