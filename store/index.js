import { fetchListData } from '../api/api'

export const state = () => ({
  count: 0,
  items: []
})

export const mutations = {
  increment(state) {
    state.count++
  },
  setItems(state, { items }) {
    state.items = items
  }
}

export const actions = {
  fetchListData({ commit }, { type }) {
    return fetchListData(type).then((items) => commit('setItems', { items }))
  }
}

export const getters = {
  getCount: (state) => {
    return state.count
  },
  displayItems: (state) => {
    return state.items.slice(0, 20)
  }
}
