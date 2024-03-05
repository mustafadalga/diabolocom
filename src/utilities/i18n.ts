import { createI18n } from "vue-i18n";
import { defaultLocale } from "@/constants";

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

export const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: defaultLocale,
    messages,
});
