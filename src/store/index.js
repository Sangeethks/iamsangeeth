import Vue from 'vue'
import Vuex from 'vuex'

import { master } from './modules/master'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { master }
})
