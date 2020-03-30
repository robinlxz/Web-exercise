<template>
  <div>
    <h2>Add Todo</h2>
    <form action="" @submit="submitTodo">
      <input type="text" v-model="item" placeholder="Add Todo...">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>


<script>
import {v4 as uuidv4 } from 'uuid';

export default {
  name: "AddTodo",
  data() {
    return {
      item: null
    }
  },
  methods: {
    submitTodo(e) {
      e.preventDefault();
      const newTodo = {
        id: uuidv4(),
        title: this.item,
        completed: false
      }
      this.$emit('add-new-todo', newTodo);
      this.item = null;
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }

</style>