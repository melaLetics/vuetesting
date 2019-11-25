import flushPromises from 'flush-promises'
import { mutations, getters, actions } from '../store'
import { fetchListData } from '../api/api'

jest.mock('../api/api')

describe('testing the store', () => {
  test('mutation increment adds one to count', () => {
    const state = {
      count: 0
    }
    mutations.increment(state)
    expect(state.count).toBe(1)
  })
  test('setting items with mutation setItems works correct', () => {
    const items = [{ id: 1 }, { id: 2 }]
    const state = {
      items: []
    }
    mutations.setItems(state, { items })
    expect(state.items).toBe(items)
  })
  test('getter returns correct state', () => {
    const state = {
      count: 5
    }
    const result = getters.getCount(state)
    expect(result).toBe(5)
  })
  test('getter returns an array of 20 items', () => {
    /*
     ** create an Array with 21 values.
     *  Using this as state, the getter should just return 20 items
     */
    const items = Array(21)
      .fill()
      .map((v, i) => i)
    const state = {
      items
    }
    const result = getters.displayItems(state)
    const expectedResult = items.slice(0, 20)
    expect(result).toEqual(expectedResult)
  })
  /*
   **
   */
  test('fetchListData calls commit with the result of FetchListData', async () => {
    const items = [{}, {}]
    const type = 'top'
    /*
     ** with mockImplementationOnce, define a function being used as mock for one call
     ** returns a resolved promise with the items if fetchListData is called with the correct type (see api/api.js);
     ** otherwise, returns an empty resolved promise
     */
    fetchListData.mockImplementationOnce((calledWith) => {
      return calledWith === type ? Promise.resolve(items) : Promise.resolve()
    })
    /*
     ** mock a context object
     */
    const context = {
      commit: jest.fn()
    }
    actions.fetchListData(context, { type })
    /*
     ** waits for pending promise handlers
     */
    await flushPromises()
    expect(context.commit).toHaveBeenCalledWith('setItems', { items })
  })
})
