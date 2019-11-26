import { createLocalVue, shallowMount } from '@vue/test-utils'
import Login from '~/components/Login.vue'

describe('test routing', () => {
  /*
   ** Testing a routing used by "this.$router.push() method
   */
  test('should navigate to Dashboard on successful login', async () => {
    /*
     ** when testing a plugin, use a localVue instance!
     */
    const localVue = createLocalVue()
    /*
     ** mock the push function of $router
     */
    const $router = {
      push: jest.fn()
    }
    const wrapper = shallowMount(Login, {
      localVue,
      mocks: {
        $router
      }
    })
    wrapper.find('#my-button').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/dashboard')
    /*
     ** instead of expecting the route, it could be tested against the $route.name
     ** see next test
     */
  })
  /*
   ** Testing a routing with nuxt-link component
   */
  test('routing with nuxt-link works fine', async () => {
    const localVue = createLocalVue()
    const $route = {
      name: 'dashboard'
    }
    const wrapper = shallowMount(Login, {
      localVue,
      mocks: {
        $route
      }
    })
    wrapper.find('#direct-call').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$route.name).toBe($route.name)
  })
})
