<template>
  <div>
    <h2>Add Todo</h2>
    <form action="" @submit="submitTodo">
      <!-- <p> -->
        <!-- <label for="newTodo">New Todo</label> -->
        <input type="text" v-model="newTodo" placeholder="Add Todo...">
      <!-- </p> -->
      <!-- <button class="btn">Submit</button> -->
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>


<script>
export default {
  name: "AddTodo",
  data() {
    return {
      newTodo: null
    }
  },
  methods: {
    submitTodo(e) {
      e.preventDefault();
      this.$emit('add-new-todo', this.newTodo);
      this.newTodo = null;
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