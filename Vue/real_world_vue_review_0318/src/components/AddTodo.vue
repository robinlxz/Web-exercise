<template>
  <div>
    <form 
      action=""
      @submit.prevent="submitNewTodo"
    >
      <input type="text" placeholder="New Todo..." v-model="newTodoText">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import uuidv4 from 'uuid';
  export default {
    name: 'AddTodo',
    data() {
      return {
        newTodoText: null
      }
    },
    methods: {
      submitNewTodo() {
        const newTodoObject = {
          id: uuidv4(),
          title: this.newTodoText,
          completed: false
        };
        this.$emit('submit-new-todo', newTodoObject);
        this.newTodoText = null;
      }
    }
  }
</script>

<style scoped>

</style>