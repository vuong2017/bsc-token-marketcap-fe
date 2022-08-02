/**
 * import and init global plugins
 */

import Vue from 'vue'

import globalEventBus from '../plugins/globalEventBus'
import './element-ui'

Vue.use(globalEventBus)
