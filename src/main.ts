import { createApp, defineCustomElement } from 'vue'
import './style.css'
import App from './App.vue';

import I18nHost from "@/components/I18nHost.ce.vue";
import LocalePicker from "@/components/LocalePicker.ce.vue";
import Counter from "@/components/Counter.ce.vue";
import ControlPanel from "@/components/ControlPanel.ce.vue";
import MetricsDisplay from "@/components/MetricsDisplay.ce.vue";

customElements.define('i18n-host', defineCustomElement(I18nHost));
customElements.define('locale-picker', defineCustomElement(LocalePicker));
customElements.define('counter-element', defineCustomElement(Counter));
customElements.define('control-panel', defineCustomElement(ControlPanel));
customElements.define('metrics-display', defineCustomElement(MetricsDisplay));

createApp(App).mount('#app')
