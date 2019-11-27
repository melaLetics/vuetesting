<template>
  <transition>
    <svg class="spinner" width="50px" height="50px" viewBox="0 0 50 50">
      <circle
        class="path"
        fill="none"
        stroke-width="4"
        strokelinecap="
round"
        cx="22"
        cy="22"
        r="20"
      ></circle>
    </svg>
  </transition>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style scoped></style>
