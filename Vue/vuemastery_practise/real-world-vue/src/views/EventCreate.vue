<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <p>Username: {{ userName }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name
    }
  }
}
</script>