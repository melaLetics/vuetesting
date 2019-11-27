import { shallowMount } from '@vue/test-utils'
import Dashboard from '~/components/Dashboard'

describe('Dashboard.vue', () => {
  // Testing the component to renders a specific text
  test('renders This is the page after login', () => {
    const wrapper = shallowMount(Dashboard)
    expect(wrapper.text()).toContain('This is the page after login')
    /*
     ** if you would use toBe() here, the test would probably fail as all the text will be rendered
     */
  })
})
