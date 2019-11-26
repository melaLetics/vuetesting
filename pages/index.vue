<template>
  <div>
    <item-list />
    <br />
    <br />
    <my-button />
    <br />
    <br />
    <Modal v-if="showModal" @close-modal="closeModal">
      <Form @form-submitted="closeModal" />
    </Modal>
    <br />
    <br />
    <Login />
  </div>
</template>

<script>
import Login from '../components/Login'
import Form from '~/components/Form'
import Modal from '~/components/Modal'
import ItemList from '~/components/ItemList.vue'
import myButton from '~/components/Button.vue'
export default {
  components: {
    ItemList,
    Form,
    Modal,
    myButton,
    Login
  },
  data() {
    return {
      showModal: true
    }
  },
  methods: {
    closeModal() {
      this.showModal = false
    }
  }
}
</script>
