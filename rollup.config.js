import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

const config = {
  input: 'src/index.js',
  external: ['react'],
  output: {
    format: 'commonjs',
    name: 'react-animated-show-more',
    globals: {
      react: 'React'
    }
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    uglify(),
    commonjs(),
  ]
};

export default config;
