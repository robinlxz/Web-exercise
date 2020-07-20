<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>The event is created by #{{ user.id }}</p>
    <ul>
      <li v-for="(cat, index) in categories" :key="index">{{ cat }}</li>
    </ul>
    <h2>{{ getTodoByID(2) }}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    // getTodo() {
    //   return this.$store.getters.getTodoByID
    // },
    ...mapGetters(['getTodoByID']),
    ...mapState(['user', 'categories'])
  }
  // computed: mapState({
  //   // userName: state => state.user.name,
  //   // userID: state => state.user.id
  //   user: 'user',
  //   categories: 'categories'
  // })
  // computed: {
  //   userName() {
  //     return this.$store.state.user.name
  //   }
  // }
}
</script>

<style scoped>
</style>