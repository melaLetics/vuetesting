import { shallowMount } from '@vue/test-utils'
import index from '~/pages/index.vue'
import Modal from '~/components/Modal.vue'

describe('index.vue', () => {
  test('hides Modal when Modal emits close-modal', () => {
    const wrapper = shallowMount(index)
    wrapper.find(Modal).vm.$emit('close-modal')
    expect(wrapper.find(Modal).exists()).toBeFalsy()
  })
})
