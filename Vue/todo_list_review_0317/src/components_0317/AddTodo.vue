<template>
  <div>
    <form action="" @submit.prevent="submitTodo">
      <input type="text" v-model="newTodo">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import uuidv4 from 'uuid'
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  created() {
    console.log(uuidv4())
  },
  methods: {
    submitTodo() {
      const newTodoObject = {
        id: uuidv4(),
        title: this.newTodo,
        completed: false
      };
      this.$emit('add-todo', newTodoObject);
    }
  }
}
</script>