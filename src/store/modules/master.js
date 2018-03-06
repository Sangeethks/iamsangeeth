// import Vue from 'vue'

const state = {
    msgUnderConstruction: 'Hold on tight! I will get back to you soon..'
}

const getters = {
    msgUnderConstruction: (state) => {
        return state.msgUnderConstruction
    }
}

const mutations = {

}

const actions = {

}

export const master = { state, getters, mutations, actions }
