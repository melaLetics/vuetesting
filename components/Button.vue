<template>
  <div>
    <button @click="onClick">Click me!</button>
    <button @click="startTimer">Start Timer</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      buttonClicked: false,
      timedOut: false
    }
  },
  methods: {
    onClick() {
      this.buttonClicked = true
    },
    startTimer() {
      setTimeout(this.setTimedOut(), 6000000)
    },
    setTimedOut() {
      this.timedOut = true
    }
  }
}
</script>

<style scoped></style>
