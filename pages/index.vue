<template>
  <div>
    <item-list />
    <fetched-data-list />
  </div>
</template>

<script>
import FetchedDataList from '../components/FetchedDataList'
import ItemList from '~/components/ItemList.vue'
export default {
  components: {
    ItemList,
    FetchedDataList
  }
}
</script>
