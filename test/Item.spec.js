/*
 ** You can mount components with the Vue Test Utils shallowMount and mount
 ** methods.
 */
import { mount, shallowMount } from '@vue/test-utils'
import Item from '@/components/Item.vue'
describe('Item.vue', () => {
  test('renders item', () => {
    const item = {
      title: 'Test'
    }
    /*
     ** mount creates a wrapper that contains the mounted and rendered Vue component. Child component are not stubbed!
     */
    const wrapper = mount(Item, {
      propsData: { item }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  /*
   ** remind: shallowmount mounts also a component but stubs all the children of a component before it mounts it.
   *  shallowmount ensures that you test a component in isolation!
   */
  test('renders item with shallowMount', () => {
    const item = {
      title: 'Test'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  // Testing rendering of props
  test('renders item.title', () => {
    const item = {
      title: 'Test'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.title)
  })
  // Testing rendered component output
  test('renders a list with item.title', () => {
    const item = {
      title: 'Test'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.find('li').text()).toContain(item.title)
  })
  // Testing DOM attributes
  test('renders a link to item.link with item.title as text', () => {
    const item = {
      title: 'Test',
      url: 'http://www.google.de'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    // find the link-DOM-attribute
    const a = wrapper.find('a')
    expect(a.text()).toBe(item.title)
    expect(a.attributes().href).toBe(item.url)
  })
  /*
   ** generates a snapshot test.
   ** the Item.vue generates a singel presentation of dynamic data.
   ** The dynamic data has to be passed as static data for Snapshot tests.
   */
  test('renders correctly', () => {
    const dateNow = jest.spyOn(Date, 'now')
    const dateNowTime = new Date('2019')
    dateNow.mockImplementation(() => dateNowTime)
    const item = {
      by: 'melaSchick',
      id: 1,
      score: 10,
      time: dateNowTime / 1000 - 600,
      title: 'Testing Snapshot tests',
      type: 'story',
      url: 'https://vue-test-utils.vuejs.org/'
    }
    /*
     ** createWrapper creates a wrapper for mounted Vue instance or an HTML element(!).
     */
    const wrapper = shallowMount(Item, { propsData: { item } })
    dateNow.mockRestore()
    expect(wrapper.element).toMatchSnapshot()
  })
  /*
   ** if there is just an if-statement in your Component, you have to test all output cases!
   */
  test('renders correctly as job', () => {
    const dateNow = jest.spyOn(Date, 'now')
    const dateNowTime = new Date('2019')
    dateNow.mockImplementation(() => dateNowTime)
    const item = {
      by: 'melaSchick',
      id: 1,
      score: 10,
      time: dateNowTime / 1000 - 600,
      title: 'Testing Snapshot tests',
      type: 'job',
      url: 'https://vue-test-utils.vuejs.org/'
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    dateNow.mockRestore()
    expect(wrapper.element).toMatchSnapshot()
  })
})
