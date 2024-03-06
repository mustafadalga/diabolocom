import { defineCustomElement } from 'vue';
import LocalePicker from "@/components/LocalePicker.ce.vue";

customElements.define('locale-picker', defineCustomElement(LocalePicker));
