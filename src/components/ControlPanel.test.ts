import { describe, it, expect, vi, beforeEach } from 'vitest';
import { VueWrapper } from "@vue/test-utils";
import store from "@/store";
import mountComponent from "@/utilities/mountComponent.ts";
import { messages } from "@/utilities/i18n.ts";
import ControlPanel from "./ControlPanel.vue";

describe('ControlPanel', () => {
    let wrapper: VueWrapper<typeof ControlPanel>;

    beforeEach(() => {
        vi.restoreAllMocks();
        wrapper = mountComponent<typeof ControlPanel>(ControlPanel);
    });

    it('should display the correct increment button text in English', () => {
        expect(wrapper.find('[data-testid="btn-reset"]').text()).toBe(messages.en.reset);
    });

    it('should call store.mutations.reset when reset button is clicked', async () => {
        const commitSpy = vi.spyOn(store.mutations, 'reset');

        await wrapper.find('[data-testid="btn-reset"]').trigger('click');

        expect(commitSpy).toHaveBeenCalled();
    });
})