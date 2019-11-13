import { shallowMount } from '@vue/test-utils'
import ItemList from '@/components/ItemList.vue'
import Item from '@/components/Item.vue'
describe('ItemList.vue', () => {
  test('renders ItemList with shallowMount', () => {
    const wrapper = shallowMount(ItemList)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  // testing child components
  /*
   **  findAll uses a selector to match all nodes in the rendered output
   **  You can even use components as selector
   */
  test('renders an Item for each given item', () => {
    const items = [{}, {}]
    const wrapper = shallowMount(ItemList)
    expect(wrapper.findAll(Item)).toHaveLength(items.length)
  })
  // Testing props
  test('renders an Item with data for each given item', () => {
    const items = [
      {
        id: 1,
        title: 'google',
        url: 'https://www.google.de'
      },
      {
        id: 2,
        title: 'twitter',
        url: 'https://twitter.com'
      }
    ]
    const wrapper = shallowMount(ItemList)
    const compItems = wrapper.findAll(Item)
    expect(compItems).toHaveLength(items.length)
    compItems.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props().item).toStrictEqual(items[i])
    })
  })
  // Testing classes
  test('renders Item with class "item-list"', () => {
    const wrapper = shallowMount(ItemList)
    expect(wrapper.classes()).toContain('item-list')
  })
})
