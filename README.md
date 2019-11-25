# testing

``` bash
!!! DO NOT AVOID TESTING BECAUSE IT JUST TAKES TOO MUCH TIME
!!! DO NOT FEAR WRITING TESTS


* Test only output that is dynamically generated
* Test only output that is part of the component contract (what is the purpose of the component?)
   ```

## Where to find what
``` bash
Button.spec.js:
    - fake timers 
    - test a click on a button with an action changing a properties value
    - test a function calling a blackboxed function (external function, not in this unit)

FetchedDataList.spec.js (not shown via index.vue)
    - testing/mocking asynchronous code
     
Form.spec.js:
    - mock an axios call
    - set input fields to test the correct processing
    - check radio buttons
    - check selected options

Item.spec.js:
    - renders given propsData
    - renders a specific (non dynamic) text
    - rendered component output
    - DOM attributes

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
