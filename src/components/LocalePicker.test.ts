import { describe, it, expect, beforeEach } from 'vitest';
import { flushPromises, VueWrapper } from "@vue/test-utils";
import { i18n, messages } from "@/utilities/i18n.ts";
import mountComponent from "@/utilities/mountComponent.ts";
import { defaultLocale } from "@/constants";
import LocalePicker from "./LocalePicker.ce.vue";

describe('LocalePicker', () => {
    let wrapper: VueWrapper<typeof LocalePicker>
    beforeEach(() => {
        i18n.global.locale.value = defaultLocale;
        wrapper = mountComponent<typeof LocalePicker>(LocalePicker);
    });

    it('should show locale picker options when language button icon is clicked', async () => {
        // Initially, the options should not be visible
        expect(wrapper.find('[data-testid="locale-picker-options"]').exists()).toBe(false);

        await wrapper.find('[data-testid="btn-icon-language"]').trigger('click');

        expect(wrapper.find('[data-testid="locale-picker-options"]').exists()).toBe(true);
    });

    it('should render i18n text in selected language when a language button is clicked', async () => {
        await wrapper.find('[data-testid="btn-icon-language"]').trigger('click');
        await wrapper.find('[data-testid="btn-french"]').trigger('click');
        await wrapper.find('[data-testid="btn-icon-language"]').trigger('click');

        expect(wrapper.html()).toContain(messages.fr.french);
    });


    it('should hides options when clicking outside', async () => {
        // Initially, options should not be visible
        expect(wrapper.find('[data-testid="locale-picker-options"]').exists()).toBe(false);

        // Simulate clicking on the language icon to show the options
        await wrapper.find('[data-testid="btn-icon-language"]').trigger('click');
        await flushPromises()

        // options should be visible
        expect(wrapper.find('[data-testid="locale-picker-options"]').exists()).toBe(true);

        // Simulate clicking outside of the locale picker
        document.dispatchEvent(new MouseEvent('mousedown'));
        await flushPromises();

        expect(wrapper.find('[data-testid="locale-picker-options"]').exists()).toBe(false);
    });
})