<template>
  <div>
    <br />
    <br />
    <Modal v-if="showModal" @close-modal="closeModal">
      <Form @form-submitted="closeModal" />
    </Modal>
    <br />
    <br />
    <item :key="item.id" :item="item"> </item>
  </div>
</template>

<script>
import Form from '~/components/Form'
import Modal from '~/components/Modal'
import Item from '~/components/Item'
export default {
  components: {
    Form,
    Modal,
    Item
  },
  data() {
    return {
      showModal: true,
      item: {
        by: 'melaSchick',
        id: 1,
        score: 10,
        time: new Date('2019') / 1000 - 600,
        title: 'Testing Snapshot tests',
        type: 'story',
        url: 'https://vue-test-utils.vuejs.org/'
      }
    }
  },
  methods: {
    closeModal() {
      this.showModal = false
    }
  }
}
</script>
