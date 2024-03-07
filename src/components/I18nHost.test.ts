import { describe, it, expect, vi, beforeEach } from 'vitest';
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import { i18n, messages } from "@/utilities/i18n.ts";
import { defaultLocale } from "@/constants";
import I18nHost from "./I18nHost.ce.vue";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

const TestComponent = defineComponent({
    setup() {

        const { t } = useI18n();
        return { t };
    },
    template: `<p>{{ t('metricsLabel') }}</p>`,
})


describe('Counter', () => {
    let wrapper: VueWrapper<typeof I18nHost>;
    beforeEach(() => {
        vi.restoreAllMocks();
        i18n.global.locale.value = defaultLocale;
        wrapper = mount(I18nHost, {
            global: {
                plugins: [ i18n ],
            },
            slots: {
                default: TestComponent,
            },
        }) as VueWrapper<typeof I18nHost>;
    });

    it('should provide i18n context to child components, allowing them to display localized messages', () => {
        expect(wrapper.html()).toContain(messages.en.metricsLabel);
    });

    it('should update content when the locale changes', async () => {
        expect(wrapper.text()).toContain(messages.en.metricsLabel);

        i18n.global.locale.value = 'fr';

        await flushPromises();

        expect(wrapper.text()).toContain(messages.fr.metricsLabel);
    });
})