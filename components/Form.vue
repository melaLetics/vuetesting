<template>
  <div class="form-group">
    <form @submit="onSubmit">
      <h3>Example of an input form</h3>
      <br />
      <label>Enter your email address</label>
      <br />
      <input v-model="email" type="email" placeholder="email address" />
      <br />
      <label>Male</label>
      <input v-model="gender" value="male" type="radio" name="gender" />
      <label>Female</label>
      <input v-model="gender" value="female" type="radio" name="gender" />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  data: () => ({
    email: null,
    gender: 'male'
  }),
  methods: {
    onSubmit(event) {
      this.axios.post('http://demo7437963.mockable.io/validate', {
        email: this.email,
        gender: this.gender
      })
      this.$emit('form-submitted')
    }
  }
}
</script>
<style>
.form-group {
  margin: 10px auto;
  max-width: 400px;
  padding: 20px 12px 10px 20px;
  font: 13px 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
  background-color: lightgrey;
}

.form-group label {
  margin: 0 0 3px 0;
  padding: 0px;
  font-weight: bold;
}
.form-group input[type='radio'],
.form-group input[type='email'] {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border: 1px solid darkgrey;
  padding: 7px;
  margin: 0px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
}
.form-group input[type='radio']:focus,
.form-group input[type='email']:focus {
  -moz-box-shadow: 0 0 8px darkgrey;
  -webkit-box-shadow: 0 0 8px darkgrey;
  box-shadow: 0 0 8px darkgrey;
  border: 1px solid darkgrey;
}
</style>
