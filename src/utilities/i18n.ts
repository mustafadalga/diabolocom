import { createI18n } from "vue-i18n";
import { defaultLocale } from "@/constants";
import { ref, watch } from "vue";

export const messages = {
    en: {
        increment: 'Increment',
        decrement: 'Decrement',
        reset: "Reset",
        english: "English",
        french: "French",
        metricsLabel: "Current Value"
    },
    fr: {
        increment: 'Incrémenter',
        decrement: 'Décrémenter',
        reset: "Réinitialiser",
        english: "Anglais",
        french: "Français",
        metricsLabel: "Valeur actuelle",
    },
};

export const locale = ref(defaultLocale);

export const i18n = createI18n({
    legacy: false,
    locale: locale.value,
    fallbackLocale: defaultLocale,
    messages,
});

watch(locale, (newValue: string) => {
    i18n.global.locale.value = newValue as typeof i18n.global.locale.value;
});
