import Vuex from 'vuex';
import {createLocalVue, shallowMount} from '@vue/test-utils';
import storeConfig from '@/store'
import App from '@/App'

describe("App", () => {
  let localVue;
  let store;
  let wrapper;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(storeConfig);
    wrapper = shallowMount(App, {store, localVue});
  });

  it("test toggle", () => {
    const result = wrapper.find('#app-toggle').checked;
    const expected = store.getToggle;
    expect(result).toEqual(expected);
  })
})