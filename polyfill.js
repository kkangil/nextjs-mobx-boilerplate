import includes from 'core-js/library/fn/array/virtual/includes';
import '@babel/polyfill';

Array.prototype.includes = includes;