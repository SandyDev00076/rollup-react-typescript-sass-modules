import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/output.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        serve({
            open: true,
            contentBase: ["", "public"],
            port: 3000,
        }),
        livereload({ watch: 'dist' })
    ]
}