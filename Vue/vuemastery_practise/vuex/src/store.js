import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'lxz vuex' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [
      { id: 1, text: 'todo1', done: true },
      { id: 2, text: 'todo2', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: [],
    eventTotal: 0,
    event: {}
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENTS_TOTAL(state, total) {
      state.eventTotal = total
    },
    SET_EVENT(state, event) {
      state.event = event
      console.log(state.event)
    }
  },
  actions: {
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          // console.log('Total events:' + response.headers['x-total-count'])
          commit('SET_EVENTS_TOTAL', response.headers['x-total-count'])
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchEvent({ commit, getters }, { id }) {
      // console.log('id in fetchEvent is: ' + id)
      let event = getters.getEventByID(id)
      if (event) {
        commit('SET_EVENT', event)
      } else {
        EventService.getEvent(id)
          .then(response => {
            // console.log(response.data)
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
      }
    }
  },
  getters: {
    // catLength: state => {
    //   return state.categories.length
    // },
    // notFood: state => {
    //   return state.categories.filter(item => item != 'food')
    // },
    // FoodCount: (state, getters) => {
    //   return state.categories.length - getters.notFood.length
    // },
    getTodoByID: state => id => {
      return state.todos.filter(todo => todo.id === id)
    },
    getEventByID: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
