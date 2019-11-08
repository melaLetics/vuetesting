import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'
describe('Item.vue', () => {
  /*
   ** beforeEach is a function being processed before each test case
   */
  beforeEach(() => {
    // in Button.vue, a setTimout is used. For not waiting, this timeout will be mocked
    jest.useFakeTimers()
  })
  /*
   ** This test simulates a click on a button causing the Components data to be changed
   */
  test('click is called when button is clicked', () => {
    const wrapper = shallowMount(Button)
    wrapper.setData({ buttonClicked: false })
    wrapper.vm.onClick()
    expect(wrapper.vm.buttonClicked).toBe(true)
  })
  test('setTimeout works', () => {
    const wrapper = shallowMount(Button)
    wrapper.setData({ timedOut: false })
    wrapper.vm.startTimer()
    expect(wrapper.vm.timedOut).toBe(true)
  })
})
