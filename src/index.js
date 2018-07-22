//import a css
import './index.css';
import numeral from 'numeral';
const courseValue = numeral(1000).format('$0,0.00');
// add a breakpoint see devtool: 'inline-source-map' in webpack.config.dev.js
debugger;
console.log(`I would pay ${courseValue} for this course`);
