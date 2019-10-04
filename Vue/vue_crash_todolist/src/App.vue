<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
    <lxzTest />
  </div>
</template>

<script>
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import lxzTest from './components/lxzTest';

export default {
  name: 'app',
  components: {
    Header,
    Todos,
    AddTodo,
    lxzTest
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Vue.js Crash course",
          completed: false
        },
        {
          id: 2,
          title: "Vue.js official intro",
          completed: false
        },
        {
          id: 3,
          title: "Django",
          completed: false
        }
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((x) => x.id!==id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
