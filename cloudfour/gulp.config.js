import util from 'gulp-util';
import helpers from 'core-hbs-helpers';
import sassJsonImporter from 'node-sass-json-importer';
import path from 'path';
import handlebars from 'handlebars';
import handlebarsLayouts from 'handlebars-layouts';

const SRC = './src';
const DEST = './dist';

var env = util.env;
var cwd = process.cwd();

/* Attach layout helpers */
handlebarsLayouts.register(handlebars);

/* TODO: put this somewhere better. */
helpers.replace = function (str, search, replacment, options) {
  return str.replace(search, replacment);
};

export default {
  assemble: {
    handlebars: handlebars,
    helpers: helpers,
    beautifier: {
      'indent_size': 2,
      'indent_char': ' ',
      'indent_with_tabs': false,
      'unformatted':
        `a abbr acronym address b bdo big cite code col del dfn dt em font
        h1 h2 h3 h4 h5 h6 i img ins kbd mark pre q s samp small span
        strike strong sub sup tt u var`.split(' ')
    },
    materials: [
      'src/materials/**/*',
      'src/assets/toolkit/images/**/*'
    ],
    layoutIncludes: [
      'src/views/layouts/includes/*',
      'src/views/sandbox/includes/*'
    ],
    docs: 'src/docs/**/*.md'
  },
  assets: {
    dest: `${DEST}/assets/toolkit/images`,
    optimize: !env.dev,
    src: `${SRC}/assets/toolkit/images/**/*`
  },
  clean: {
    dest: DEST
  },
  css: {
    dest: `${DEST}/assets`,
    optimize: !env.dev,
    src: `${SRC}/assets/{toolkit,fabricator}/{styles,styles/sandbox}/*.css`
  },
  scss: {
    dest: `${DEST}/assets`,
    src: `${SRC}/assets/{toolkit,fabricator}/{styles,styles/sandbox}/*.scss`,
    plugins: {
      sass: {
        outputStyle: env.dev ? 'expanded' : 'compressed',
        importer: sassJsonImporter,
        includePaths: [
          `${cwd}/${SRC}/data`,
          `${cwd}/node_modules/bootstrap-sass/assets/stylesheets`,
          `${cwd}/node_modules/modularscale-sass/stylesheets`
        ]
      }
    }
  },
  icons: {
    dest: `${DEST}/assets`,
    src: `${SRC}/assets/toolkit/images/icons/**/*.svg`,
    plugins: {
      svgSprite: {
        mode: {
          symbol: {
            dest: '',
            sprite: 'icons.svg'
          }
        },
        shape: {
          meta: `${SRC}/data/icons.yaml`,
          id: {
            generator: function (name) {
              return path.basename(name, path.extname(name));
            }
          }
        }
      }
    }
  },
  js: {
    plugins: {
      webpack: {
        entry: {
          // Fabricator UI scripts
          'fabricator/scripts/fabricator':
            `${SRC}/assets/fabricator/scripts/fabricator.js`,

          // Common toolkit scripts
          'toolkit/scripts/toolkit':
            `${SRC}/assets/toolkit/scripts/toolkit.js`,

          // Page-specific tookit scripts
          'toolkit/scripts/sandbox-demo-misc':
            `${SRC}/assets/toolkit/scripts/sandbox-demo-misc.js`,
          'toolkit/scripts/sandbox-promotions':
            `${SRC}/assets/toolkit/scripts/sandbox-promotions.js`
        },
        output: {
          path: `${DEST}/assets`,
          filename: '[name].js'
        },
        module: {
          loaders: [
            {
              test: /\.js$/,
              loaders: [
                'babel-loader',
                'imports-loader'
              ],
              presets: [
                'es2015'
              ]
            },
            {
              test: /\.jsx$/,
              loaders: [
                'babel-loader'
              ],
              presets: [
                'es2015',
                'react'
              ]
            }
          ]
        },
        externals: {
          jquery: 'jQuery'
        }
      }
    }
  },
  serve: {
    plugins: {
      browserSync: {
        files: env.dev ? `${DEST}/**/*` : null,
        logConnections: env.dev,
        open: false,
        notify: false,
        server: { baseDir: DEST }
      }
    }
  },
  watch: {
    watchers: [
      {
        match: [`${SRC}/assets/**/*.css`],
        tasks: ['css']
      },
      {
        match: [`${SRC}/assets/**/*.scss`],
        tasks: ['scss']
      },
      {
        match: [`${SRC}/{data,docs,materials,views}/**/*`],
        tasks: ['assemble']
      },
      {
        match: [`${SRC}/assets/**/*.{js,jsx}`],
        tasks: ['js']
      }
    ]
  }
};
