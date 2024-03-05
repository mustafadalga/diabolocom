import { describe, it, expect, beforeEach } from 'vitest';
import store from "./index.ts";


describe('store', () => {
    beforeEach(() => {
        store.mutations.reset();
    });

    it('should increment count by 1', () => {
        const exceptedCount = 1;
        store.mutations.increment();

        expect(store.state.count).toBe(exceptedCount);
    });

    it('should decrement count by 1', () => {
        const exceptedCount = -1;
        store.mutations.decrement();
        expect(store.state.count).toBe(exceptedCount);
    });

    it('should reset count to 0', () => {
        const exceptedCount = 0;
        store.mutations.increment();
        store.mutations.reset();

        expect(store.state.count).toBe(exceptedCount);
    });
})