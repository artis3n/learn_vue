import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();

let quoteIdCounter = 0
export class Quote {
  constructor(text) {
    this.id = quoteIdCounter++;
    this.text = text
  }
}

new Vue({
  el: '#app',
  render: h => h(App)
});
