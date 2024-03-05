import { Component } from "vue";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { i18n } from "@/utilities/i18n.ts";

export default function mountComponent<T extends Component>(Comp: T): VueWrapper<T> {
    return shallowMount(Comp, {
        global: {
            plugins: [ i18n ],
        },
    })  as VueWrapper<T>;
}