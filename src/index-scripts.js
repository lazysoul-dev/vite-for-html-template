import './index.css'

import { initMobileSidebarToggle } from './custom-scripts/mobile-sidebar-toggle.init'
import { initCounterWidget } from './vue-widgets/CounterWidget/CounterWidget.init'

async function init() {
  initMobileSidebarToggle()

  initCounterWidget()
}

init()
