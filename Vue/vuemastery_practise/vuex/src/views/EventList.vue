<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <template v-if="page!=1">
      <router-link :to="{ name: 'event-list', query: { page : page - 1} }">Prev Page</router-link> |
    </template>
    <template v-if="this.$store.state.eventTotal > ( page * 3 )">
      <router-link :to="{ name: 'event-list', query: { page : page + 1} }">Next Page</router-link>
    </template>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
// import EventService from '@/services/EventService.js'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  // data() {
  //   return {
  //     events: []
  //   }
  // },
  created() {
    // EventService.getEvents()
    //   .then(response => {
    //     this.events = response.data
    //   })
    //   .catch(error => {
    //     console.log('There was an error:', error.response)
    //   }),
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['events'])
  }
}
</script>
