import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import pkg from './package.json'
import simplevars from 'postcss-simple-vars';
 import nested from 'postcss-nested';
 import cssnext from 'postcss-cssnext';
 import cssnano from 'cssnano';
export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    external(),
    postcss({
      plugins: [
                 simplevars(),
                 nested(),
                 cssnext({ warnForDuplicates: false, }),
                 cssnano(),
               ],
      extensions: [ '.css' ],
    }),
    url(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
}
