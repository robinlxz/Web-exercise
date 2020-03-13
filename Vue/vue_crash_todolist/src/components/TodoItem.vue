<template>
  <div class="todo-item" :class="{'is-complete': todo.completed}">
    <p>
      <input type="checkbox" @click="changeStatus" :checked="todo.completed">
      {{ todo.title }}
      <button class="del" @click="deleteTodo">x</button>  
    </p>
    
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object
  },
  data () {
    return {
      selectedTodo: 0
    }
  },
  methods: {
    changeStatus() {
      // this.$emit('change-status');
      this.todo.completed = !this.todo.completed;
    },
    deleteTodo() {
      this.selectedTodo = this.todo.id
      // console.log(this.selectedTodo)
      this.$emit('delete-todo', this.selectedTodo)
    }
  }
}
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>