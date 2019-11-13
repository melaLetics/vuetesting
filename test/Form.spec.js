import { shallowMount } from '@vue/test-utils'
import Form from '~/components/Form'
describe('Form.vue', () => {
  test('sends post request with email on submit', () => {
    /*
     ** there won't be an axios call in functions
     ** (but rather a blackboxed function. for testing this case, see Button.spec.js)
     ** it's just a demonstration
     */
    const axios = {
      post: jest.fn()
    }
    const wrapper = shallowMount(Form, {
      mocks: {
        axios
      }
    })
    const input = wrapper.find('input[type="email"]')
    input.setValue('email@gmail.com')
    wrapper.find('button').trigger('submit')
    const url = 'http://demo7437963.mockable.io/validate'
    /*
     ** the expect.objectContaing helper is used to match some properties in the data object of the axios call,
     ** rather than testing that an object matches exactly
     */
    const expectedData = expect.objectContaining({
      email: 'email@gmail.com'
    })
    expect(axios.post).toHaveBeenCalledWith(url, expectedData)
  })

  /*
   ** for testing radio buttons, each case has to been tested.
   */
  test('sends post request with "male" selected checkbox value on submit', () => {
    const axios = {
      post: jest.fn()
    }
    const wrapper = shallowMount(Form, {
      mocks: {
        axios
      }
    })
    const url = 'http://demo7437963.mockable.io/validate'
    wrapper.find('input[value="male"]').setChecked()
    wrapper.find('button').trigger('submit')
    expect(axios.post).toHaveBeenCalledWith(
      url,
      expect.objectContaining({
        gender: 'male'
      })
    )
  })
  test('sends post request with "female" selected checkbox value on submit', () => {
    const axios = {
      post: jest.fn()
    }
    const wrapper = shallowMount(Form, {
      mocks: {
        axios
      }
    })
    const url = 'http://demo7437963.mockable.io/validate'
    wrapper.find('input[value="female"]').setChecked()
    wrapper.find('button').trigger('submit')
    expect(axios.post).toHaveBeenCalledWith(
      url,
      expect.objectContaining({
        gender: 'female'
      })
    )
  })
  /*
   ** testing select values
   */
  test('sends post request with selected option value on submit', () => {
    const axios = {
      post: jest.fn()
    }
    const wrapper = shallowMount(Form, {
      mocks: {
        axios
      }
    })
    const url = 'http://demo7437963.mockable.io/validate'
    const selectOption = wrapper.find('select').element.value
    wrapper.find('button').trigger('submit')
    expect(axios.post).toHaveBeenCalledWith(
      url,
      expect.objectContaining({
        selected: selectOption
      })
    )
  })
})
