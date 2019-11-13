<template>
  <div class="item-list-view">
    <div class="item-list">
      <item v-for="item in displayItems" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import { fetchListData } from '../api/api'
import Item from '~/components/Item.vue'
export default {
  name: 'FetchedDataList',
  components: {
    Item
  },
  data() {
    return {
      displayItems: []
    }
  },
  beforeMount() {
    this.loadItems()
  },
  methods: {
    loadItems() {
      fetchListData('top')
        .then((items) => {
          this.displayItems = items
        })
        .catch(() => {
          const error = new Error('Something went wrong')
          throw error
        })
    }
  }
}
</script>

<style>
.item-list-view {
  padding-top: 45px;
}
.item-list {
  background-color: #fff;
  border-radius: 2px;
  position: absolute;
  margin: 30px 0;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
@media (max-width: 600px) {
  .item-list {
    margin: 10px 0;
  }
}
</style>
