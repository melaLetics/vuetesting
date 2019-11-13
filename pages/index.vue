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
  </div>
</template>

<script>
import Form from '~/components/Form'
import Modal from '~/components/Modal'
import ItemList from '~/components/ItemList.vue'
import myButton from '~/components/Button.vue'
export default {
  components: {
    ItemList,
    Form,
    Modal,
    myButton
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
