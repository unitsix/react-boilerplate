import React from 'react'
import { MemoryRouter } from 'react-router'
import { shallow, mount } from 'enzyme'
import App from '../App'
import HelloWorld from '../../../pages/hello-world/HelloWorld'
import NotFound from '../../../pages/not-found/NotFound'

describe('<App />', () => {
  it('renders', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.getElement().props).not.toBeNull()
  })


it('should show index', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(HelloWorld)).toHaveLength(1);
  expect(wrapper.find(NotFound)).toHaveLength(0);
});

it('invalid path should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/404' ]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(HelloWorld)).toHaveLength(0);
  expect(wrapper.find(NotFound)).toHaveLength(1);
});
})
