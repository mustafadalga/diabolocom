import { reactive } from "vue";

interface IState {
    count: number
}

const store = ({
    state: reactive<IState>({
        count: 0
    }),
    getters: {},
    mutations: {
        increment() {
            store.state.count++
        },
        decrement() {
            store.state.count--
        },
        reset() {
            store.state.count = 0;
        }
    }
})

export default store;