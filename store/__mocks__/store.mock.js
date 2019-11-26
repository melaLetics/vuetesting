/**
 * mimics packages/vue-app/template/store.js
 * optionally nest to build { modules: { a: { namespaced: true, state, ... } } }
 * @param imports has form {
 *   export state = () => ({})
 *   export getters = {}
 *   export mutations = {}
 *   export actions = {}
 * }
 * @param name when a string, imports are built as a namespaced sub-module
 * @param rootOptions null or result of buildVuexFromStore(rootImports)
 */
import _cloneDeep from 'lodash/cloneDeep'
export function buildVuexFromNuxt(imports, name, rootOptions) {
  const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']
  //  cloneDeep is because Vuex mutates the options object used to create the store.
  const options = _cloneDeep(
    VUEX_PROPERTIES.reduce((acc, key) => {
      if (imports[key]) acc[key] = imports[key]
      return acc
    }, {})
  )
  if (!name) return options
  options.namespaced = true
  if (!rootOptions) rootOptions = buildVuexFromNuxt({ state: () => ({}) })
  if (!rootOptions.modules) rootOptions.modules = {}
  rootOptions.modules[name] = options
  return rootOptions
}
