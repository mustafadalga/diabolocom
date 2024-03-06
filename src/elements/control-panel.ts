import { defineCustomElement } from 'vue';
import ControlPanel from "@/components/ControlPanel.ce.vue";

customElements.define('control-panel', defineCustomElement(ControlPanel));
