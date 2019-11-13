/*
 ** for testing asynchronous code, you need to
 *  yarn add flush-promises --d
 */

/*
 ** after this line, every import of given file will be mocked!
 */
import flushPromises from 'flush-promises'
import { shallowMount } from '@vue/test-utils'
import { fetchListData } from '~/api/api'
import FetchedDataList from '~/components/FetchedDataList'
import Item from '~/components/Item'
jest.mock('~/api/api.js')

describe('ItemList.vue', () => {
  test('renders an Item with data for each item', async () => {
    const items = [{ id: 1 }, { id: 2 }, { id: 3 }]
    fetchListData.mockResolvedValueOnce(items)
    const wrapper = shallowMount(FetchedDataList)
    /*
     ** flushPromises waits until all pending promise callbacks have run. If removed, the test will fail!
     ** for more information on how flushPromises work, see:
     ** https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules.
     */
    await flushPromises()
    const Items = wrapper.findAll(Item)
    expect(Items).toHaveLength(items.length)
    Items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.vm.item).toBe(items[i])
    })
  })
})
