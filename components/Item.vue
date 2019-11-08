<template>
  <div>
    Hello, World!
    <li v-if="item">
      <a :href="item.url">{{ item.description }}</a>
    </li>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
