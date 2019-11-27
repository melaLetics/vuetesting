import { shallowMount } from '@vue/test-utils'
import Spinner from '~/components/Spinner'

describe('Static component Spinner.vue', () => {
  test('renders correctly', () => {
    /*
     ** with wrapper.element you got access to root DOM node
     ** use this as input for the snapshot test
     ** first running, this will create the snapshot. In next runs, this will compare the output with this snapshot.
     */
    expect(shallowMount(Spinner).element).toMatchSnapshot()
    /*
     ** In order to experiencing a snapshot test fail, change the Spinner.vue component!
     ** for a new snapshot as test base, delete the existing one or run yarn test:unit -- --updateSnapshot
     ** the -- -u option will rewrite all failed snapshot tests.
     */
  })
})
