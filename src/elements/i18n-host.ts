import { defineCustomElement } from 'vue';
import I18nHost from "@/components/I18nHost.ce.vue";

customElements.define('i18n-host', defineCustomElement(I18nHost));
