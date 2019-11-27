import { render, renderToString } from '@vue/server-test-utils'
import PageNotFound from '../components/PageNotFound'

/**
 * @jest-environment node
 */

/*
 ** in order to run the code in the right testing environment
 ** (this meens: client-side in jsdom environment, server-side in node environment)
 */
describe('PageNotFound.vue', () => {
  test('renders correctly on the server', () => {
    /*
     ** renderToString returns a string of HTML
     */
    const str = renderToString(PageNotFound)
    expect(str).toMatchSnapshot()
  })
  /*
   ** render will returns a wrapper object (but it's a Cheerio wrapper, see https://cheerio.js.org )
   */
  test('renders 404 inside <h1> tag', () => {
    const wrapper = render(PageNotFound)
    expect(wrapper.find('h1').text()).toBe('404')
  })
})
