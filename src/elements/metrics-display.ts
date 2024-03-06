import { defineCustomElement } from 'vue';
import MetricsDisplay from "@/components/MetricsDisplay.ce.vue";

customElements.define('metrics-display', defineCustomElement(MetricsDisplay));
