<template>
  <div class="about">
    <h1>Event Show: {{ event.title }}</h1>
  </div>
</template>


<script>
import EventService from '../services/EventService';

export default {
  props: ['id'],
  data() {
    return {
      event: {}
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data;
      })
      .catch(error => {
        console.log('Error happens:' + error);
      });
  }
};
</script>
