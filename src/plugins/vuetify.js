import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#22aa94',
        secondary: '#4fc3ff'
      }
    }
  },
  icons: {
    iconfont: 'fa',
  }
});
