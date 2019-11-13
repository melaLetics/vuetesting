import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'
describe('Item.vue', () => {
  /*
   ** beforeEach is a function being processed before each test case
   */
  beforeEach(() => {
    // in Button.vue, a setTimout is used. For not waiting, this timeout will be mocked
    // if there is more than one test using mocked timers, use useFakeTimers in beforeEach
    jest.useFakeTimers()
  })
  /*
   ** This test simulates a click on a button causing the Components data buttonClicked to be changed
   */
  test('click is called when button is clicked', () => {
    const wrapper = shallowMount(Button)
    wrapper.setData({ buttonClicked: false })
    wrapper.vm.onClick()
    expect(wrapper.vm.buttonClicked).toBe(true)
  })
  /*
   ** this is why the jest.useFakeTimers() is defined in beforeEach
   */
  test('setTimeout works', () => {
    const wrapper = shallowMount(Button)
    wrapper.setData({ timedOut: false })
    wrapper.vm.startTimer()
    expect(wrapper.vm.timedOut).toBe(true)
  })
  /*
   ** in case of a function call doing wild things (call an external function not being tested in this unit test)
   *  mock the function call
   */
  test('blackboxed function is called on click', () => {
    const startFunction = jest.fn()
    // startFunction is now a mocked function and will be passed to Button as method
    const wrapper = shallowMount(Button, {
      methods: { startFunction }
    })
    wrapper.find('#my-button').trigger('click')
    expect(startFunction).toHaveBeenCalled()
  })
})
