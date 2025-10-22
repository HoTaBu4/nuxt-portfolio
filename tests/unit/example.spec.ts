import { mount } from '@vue/test-utils';
import ExampleComponent from '@/components/ExampleComponent.vue';

describe('ExampleComponent.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(ExampleComponent);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct title', () => {
    const title = 'My Portfolio';
    const wrapper = mount(ExampleComponent, {
      props: { title }
    });
    expect(wrapper.text()).toContain(title);
  });
});