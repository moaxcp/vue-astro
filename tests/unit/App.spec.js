import Vuex from 'vuex';
import {createLocalVue, mount} from '@vue/test-utils';
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
    wrapper = mount(App, {store, localVue});
  });

  it("test toggle default", () => {
    const result = wrapper.find('#app-toggle').checked;
    expect(result).toEqual(true);
  })
})