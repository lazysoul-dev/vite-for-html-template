import { createApp } from 'vue'
import CounterWidget from './CounterWidget.vue'

const COUNTER_WIDGET_INIT_CLASS = 'app-vue-widget-CounterWidget'

export function initCounterWidget() {
  const elements = document.getElementsByClassName(COUNTER_WIDGET_INIT_CLASS)
  for (let element of elements) {
    createApp(CounterWidget).mount(element)
  }
}
