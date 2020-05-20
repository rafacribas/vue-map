import Vue from "vue";
import Vuetify from "vuetify/lib";
import pt from "vuetify/es5/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#4caf50",
        secondary: "#009688",
        accent: "#795548",
        error: "#ff5722",
        warning: "#ff9800",
        info: "#607d8b",
        success: "#8bc34a"
      }
    }
  },
  lang: {
    locales: { pt },
    current: "pt"
  }
});
