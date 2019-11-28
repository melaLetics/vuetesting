# testing

``` bash
!!! DO NOT AVOID TESTING BECAUSE IT JUST TAKES TOO MUCH TIME
!!! DO NOT FEAR WRITING TESTS


* Test only output that is dynamically generated
* Test only output that is part of the component contract (what is the purpose of the component?)

- Unit tests just test singulated parts of the application. 
  This could be a component, a page, a store or any other codeunit. If a component uses other units, mock the other ones.
  Unit tests are very useful in Test Driven Developement (TDD). Think about what your component should cover first, 
  write the test and only then the component.
- Snapshot tests are something like playing a game of Spot the Differences. 
  A failing snapshot test is a warning that tells you your component output has changed. 
  Snapshot tests are written after you manually test a component.
- End-to-end tests will test the entire application by interacting with it. 
  While unit and snapshot tests check the components and functions thar make up an application, end-to-end tests  
  check that these components and functions work together correctly.  

FOR SERVER SIDE TESTING:
you have to 
$yarn add -D @vue/server-test-utils
split server-side tests and client-side tests into seperate files as you can run each test in just one environment.

FOR END-TO-END Testing:
you have to 
$yarn add -D nightwatch selenium-server chromedriver

Found to be extremely useful: https://devhints.io/jest

   ```

## Where to find what
``` bash
The test cases are not building a useful application!

Button.spec.js:
    - fake timers 
    - test a click on a button with an action changing a properties value
    - test a function calling a blackboxed function (external function, not in this unit)

Dashboard.js:
    - renders a specific (non dynamic) text

FetchedDataList.spec.js (not shown via index.vue)
    - testing/mocking asynchronous code
     
Form.spec.js:
    - mock an axios call
    - set input fields to test the correct processing
    - check radio buttons
    - check selected options

Item.spec.js:
    - renders given propsData
    - rendered component output
    - DOM attributes
    - snapshot test of a component with dynamic data in several outputs

ItemList.spec.js:
    - renders a child component
    - testing classes

Modal.spec.js:
    - renders a Vue instance

index.spec.js:
    - testing result after emitting 
    
Store.spec.js:
    - test mutations
    - test getters 
    - test calling a mutation with an action

StoreInstance.spec.js:
    - test initial state, action, mutation and getters as an instance 
    - localCopy of Vue and Vuex

Login.spec.js:
    - testing vue router with this.§router.push()
    - testing vue router with nuxt-link

Spinner.spec.js:
    - a snapshot test of a static component

PageNotFound.server.spec:
    - server-side rendered snapshot test
    - server-side rendered unit test

e2e/specs/journeys.js (END-TO-END Test)
    - waiting for rendered DOM elements
    - assert specific static texts like title

e2s/demo:
    - demo test for testing an ecosia search 
```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
