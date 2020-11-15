import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

let easings = {
  'ease': [0.25, 0.1, 0.25, 1.0],
  'linear': [0.00, 0.0, 1.00, 1.0],
  'ease-in': [0.42, 0.0, 1.00, 1.0],
  'ease-out': [0.00, 0.0, 0.58, 1.0],
  'ease-in-out': [0.42, 0.0, 0.58, 1.0]
}

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 800,
  easing: 'ease-in-out',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});