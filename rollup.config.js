import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/output.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        nodeResolve({
            extensions: ['.jsx', '.js']
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            preventAssignment: true
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ["@babel/preset-react"]
        }),
        commonjs(),
        serve({
            open: true,
            contentBase: ["", "public"],
            port: 3000,
        }),
        livereload({ watch: 'dist' }),
        postcss({ autoModules: true }),
        typescript()
    ]
}