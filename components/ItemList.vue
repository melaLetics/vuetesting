<template>
  <div class="item-list">
    <item v-for="item in displayItems" :key="item.id" :item="item"> </item>
  </div>
</template>

<script>
import Item from '../components/Item.vue'
export default {
  components: {
    Item
  },
  data() {
    return {
      displayItems: [
        {
          id: 1,
          description: 'google',
          url: 'https://www.google.de'
        },
        {
          id: 2,
          description: 'twitter',
          url: 'https://twitter.com'
        }
      ]
    }
  }
}
</script>
