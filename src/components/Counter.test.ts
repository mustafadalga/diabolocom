import { describe, it, expect, vi, beforeEach } from 'vitest';
import { VueWrapper } from "@vue/test-utils";
import store from "@/store";
import mountComponent from "@/utilities/mountComponent.ts";
import { i18n, messages } from "@/utilities/i18n.ts";
import { defaultLocale } from "@/constants";
import Counter from "./Counter.ce.vue";


describe('Counter', () => {
    let wrapper: VueWrapper<typeof Counter>;

    beforeEach(() => {
        vi.restoreAllMocks();
        i18n.global.locale.value = defaultLocale;
        wrapper = mountComponent<typeof Counter>(Counter)
    });

    it('should display the correct increment button text in English', () => {
        const btn = wrapper.find('[data-testid="btn-increment"]');
        expect(btn.text()).toBe(messages.en.increment);
    });

    it('should display the correct decrement button text in French', () => {
        // Dynamically change the locale to French for this test
        i18n.global.locale.value = 'fr';
        const wrapper = mountComponent<typeof Counter>(Counter);

        const btn = wrapper.find('[data-testid="btn-decrement"]');
        expect(btn.text()).toBe(messages.fr.decrement);
    });

    it('should call store.mutations.increment when increment button is clicked', async () => {
        const commitSpy = vi.spyOn(store.mutations, 'increment');

        await wrapper.find('[data-testid="btn-increment"]').trigger('click');

        expect(commitSpy).toHaveBeenCalled();
    });

    it('should call store.mutations.decrement when decrement button is clicked', async () => {
        const commitSpy = vi.spyOn(store.mutations, 'decrement');

        await wrapper.find('[data-testid="btn-decrement"]').trigger('click');

        expect(commitSpy).toHaveBeenCalled();
    });

    it('should render ControlPanel component', () => {
        const controlPanelElement = wrapper.find('control-panel');
        expect(controlPanelElement.exists()).toBe(true);
    });
})