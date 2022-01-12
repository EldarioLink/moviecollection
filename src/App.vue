<template>
  <div> 
    <Header/>
    <Button :label="labeltext" @click="isModal" class="p-button-success" />
    <Dialog header="Header" v-model:visible="display"> Content </Dialog>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      display: false,
    };
  },
  methods: {
    isModal() {
      this.display = !this.display;
    },
  },
  computed: {
    labeltext() {
      return this.display ? "Modas is opened" : "Modal is closed";
    },
  },
};
</script>

<style>
#app {
  margin: 0;
   padding: 0;
}
</style>
