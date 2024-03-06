import { describe, it, expect, beforeEach } from 'vitest';
import { flushPromises, VueWrapper } from "@vue/test-utils";
import MetricsDisplay from "./MetricsDisplay.ce.vue";
import store from "@/store";
import { i18n, messages } from "@/utilities/i18n.ts";
import mountComponent from "@/utilities/mountComponent.ts";

const defaultLocale = i18n.global.locale.value;

describe('MetricsDisplay', () => {
    let wrapper: VueWrapper<typeof MetricsDisplay>;

    beforeEach(() => {
        store.mutations.reset();
        i18n.global.locale.value = defaultLocale
        wrapper = mountComponent<typeof MetricsDisplay>(MetricsDisplay)
    });

    it('should display the correct count from the store', async () => {
        store.mutations.increment(); // Increment to make count 1
        await flushPromises();
        expect(wrapper.html()).toContain('<p>1</p>');
    });

    it('should display the correct label', async () => {
        // Dynamically change the locale to French for this test
        i18n.global.locale.value = 'fr';
        await flushPromises();

        expect(wrapper.text()).toContain(messages.fr.metricsLabel);
    });
})



