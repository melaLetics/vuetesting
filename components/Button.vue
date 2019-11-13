<template>
  <div>
    <button @click="onClick">Click me!</button>
    <button @click="startTimer">Start Timer</button>
    <button id="my-button" @click="startFunction">Start a Function</button>
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
    },
    startFunction() {
      /*
       ** this function does some wild things, e.g. calls external functions we won't test.
       */
      return true
    }
  }
}
</script>

<style scoped></style>
