<template>
  <div>
    <form action="" @submit.prevent="submitNewTodo">
      <input type="text" placeholder="new todo item" v-model="newTitle">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
// import uuidv4 from 'uuid'
  export default {
    name: 'AddTodo',
    data() {
      return {
        newTitle: null
      }
    },
    methods: {
      submitNewTodo() {
        const newTodo = {
          id: 3,
          title: this.newTitle,
          completed: false
        };
        this.$emit('add-new-todo', newTodo);
        this.newTitle = null;
      }
    }
  }
</script>

<style scoped>

</style>