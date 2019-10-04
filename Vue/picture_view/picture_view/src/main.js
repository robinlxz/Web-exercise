import Vue from 'vue'
import App from './App.vue'
// import Lightbox from 'vue-my-photos'
// Vue.component('lightbox', Lightbox);

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

Vue.use(Lightbox);

var photoDir = 
  'https://unpkg.com/vue-my-photos@1.0.0/src/assets/';

var imageList = 
  [{'name':'mountains.jpg', 
    'alt':'The Dolomites', 
    'filter':'nature',
    'id':'image1' },
   
   {'name':'bird.jpg', 
    'alt':'It is a bird on a tree!', 
    'filter':'animals',
    'id':'image2'  }, 
   
   {'name':'alps.jpg', 
    'alt':'I will live here someday', 
    'filter':'nature',
    'id':'image3'  },
   
   {'name':'bear.jpg', 
    'alt':'Friendly bear', 
    'filter':'animals',
    'id':'image4'  },
   
   {'name':'canyon.jpg', 
    'alt':'A worthy hike', 
    'filter':'nature',
    'id':'image5'  },
   
   {'name':'monumentvalley.jpg', 
    'alt':'Monument Valley', 
    'filter':'nature',
    'id':'image6'  },
   
   {'name':'puppy.jpg', 
    'alt':'Puppy with a feather', 
    'filter':'animals',
    'id':'image7'  }, 
   
   {'name':'redwoods.jpg', 
    'alt':'Foggy evening in the Redwoods', 
    'filter':'nature',
    'id':'image8'  } ];

new Vue({
  el: '#app',
  data() {
    return {
      thumbnailDir: photoDir,
      images: imageList,
      galleryFilter: 'all'
    }
  },
  methods: {
    showLightbox: function(imageName) {
      this.$refs.lightbox.show(imageName);
    },
    updateFilter(filterName) {
      this.galleryFilter = filterName;
    }
  },
  computed: {
    filteredImages: function() {
      if (this.galleryFilter === 'all') {
        return this.images;
      } else {
        return this.images.filter(image => image.filter === this.galleryFilter);
      }
    }
  }
})