<template>
  <div id="app">
    <Header />
    <Todosss :todos="todos" @app-delete-todo="appDeleteTodo"/>
    <AddTodo @add-new-todo="addTodo"/>
  </div>
</template>

<script>
// import {v4 as uuidv4 } from 'uuid';
import Todosss from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

export default {
  name: 'App',
  components: {
    Todosss,
    Header,
    AddTodo
  },
  // created() {
  //   console.log(this)
  // },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Vue Mastery Course",
          completed: false
        },
        {
          id: 2,
          title: "Django API integration",
          completed: false
        },
        {
          id: 3,
          title: "Introduction to Computer Science and Programming",
          completed: true
        }
      ]
    }
  },
  methods: {
    appDeleteTodo(todoID) {
      this.todos = this.todos.filter((todo)=>{return todo.id!==todoID});
      // console.log(this.todos)
      // console.log(todoID, "at App.vue")
    },
    addTodo(newTodo) {
      // this.todos.push(newTodo);
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
