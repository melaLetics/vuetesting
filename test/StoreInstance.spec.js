/*
 ** instead of testing the store parts separately, a full instance of the store can be tested.
 ** This way, no mocking of functions is needed.
 ** BUT you should use a localVue instance instead of the master vue instance.
 ** Also, you have to mock the store itself or you find another way to _deepClone the store-config in Nuxt
 */
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'
import * as myStore from '../store/index'
import { fetchListData } from '../api/api'
import { buildVuexFromNuxt } from '~/store/__mocks__/store.mock'

jest.mock('../api/api')

describe('testing the store as an instance', () => {
  test('increment updates store.count by 1', () => {
    // create a local copy of the Vue instance
    const localVue = createLocalVue()
    // create a store with cloned store config as you don't want to change the live store state
    localVue.use(Vuex)
    const store = new Vuex.Store(buildVuexFromNuxt(myStore, 'myStore'))
    expect(store.state.myStore.count).toBe(0)
    store.commit('myStore/increment')
    expect(store.state.myStore.count).toBe(1)
  })
  /*
   ** and the same test as in Store.spec.js
   */
  test('fetchListData calls commit with the result of FetchListData', async () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(buildVuexFromNuxt(myStore, 'myStore'))
    // test the initial value
    expect(store.state.myStore.items.length).toBe(0)
    const items = [{}, {}]
    const type = 'top'
    fetchListData.mockImplementationOnce((calledWith) => {
      return calledWith === type ? Promise.resolve(items) : Promise.resolve()
    })
    const context = {
      commit: jest.fn()
    }
    myStore.actions.fetchListData(context, { type })
    await flushPromises()
    // test if the commit was called with the correct values
    expect(context.commit).toHaveBeenCalledWith('setItems', { items })
    // make the commit in copied Vuex state and test if the values were set correctly
    myStore.mutations.setItems(store.state.myStore, { items })
    expect(store.getters['myStore/displayItems'].length).toBeGreaterThan(0)
  })
})
