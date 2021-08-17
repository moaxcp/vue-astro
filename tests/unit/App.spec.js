import Vuex from 'vuex';
import {createLocalVue, mount} from '@vue/test-utils';
import storeConfig from '@/store'
import SwitchGuide from '@/views/guide/SwitchGuide'

describe("App", () => {
  let localVue;
  let store;
  let wrapper;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(storeConfig);
    wrapper = mount(SwitchGuide, {store, localVue});
  });

  it("test toggle default", () => {
    const result = wrapper.find('#app-toggle').attributes('checked');
    expect(result).toEqual('true');
  })
})