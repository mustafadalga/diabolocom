import { createApp } from 'vue'
import { createI18n } from 'vue-i18n';
import './style.css'
import App from './App.vue';


const messages = {
    en: {
        increment: 'Increment',
        decrement: 'Decrement',
        reset: "Reset",
        english: "English",
        french: "Français",
        metricsLabel: "Current Value"
    },
    fr: {
        increment: 'Incrémenter',
        decrement: 'Décrémenter',
        reset: "Réinitialiser",
        english: "English",
        french: "Français",
        metricsLabel: "Valeur actuelle",
    },
};

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});

createApp(App).use(i18n).mount('#app')
