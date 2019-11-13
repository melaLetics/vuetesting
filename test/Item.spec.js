/*
 ** You can mount components with the Vue Test Utils shallowMount and mount
 ** methods.
 */
import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import Item from '@/components/Item.vue'
describe('Item.vue', () => {
  test('renders item', () => {
    const item = {
      title: 'Test'
    }
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
  // Testing the component to renders a specific text
  test('renders Hello, World!', () => {
    const item = {
      title: 'Test'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain('Hello, World!')
    /*
     ** if you would use toBe() here, the test would fail as all the text will be rendered
     */
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
  test('renders a list with item.description', () => {
    const item = {
      title: 'Test'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.find('li').text()).toContain(item.title)
  })
  // Testing DOM attributes
  test('renders a link to item.link with item.description as text', () => {
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
})
