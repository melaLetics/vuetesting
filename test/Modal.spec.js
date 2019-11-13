import { shallowMount } from '@vue/test-utils'
import Modal from '~/components/Modal.vue'
describe('Modal.vue', () => {
  test('is rendered as Vue instance', () => {
    const wrapper = shallowMount(Modal)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
