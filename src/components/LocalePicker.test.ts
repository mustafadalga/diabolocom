import { describe, it, expect, beforeEach } from 'vitest';
import {  VueWrapper } from "@vue/test-utils";
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
})