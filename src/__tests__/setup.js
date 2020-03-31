import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import 'jest-enzyme'
import { mount, shallow, configure } from 'enzyme'
import { create } from 'react-test-renderer'

configure({ adapter: new Adapter() })

global.describeComponent = function describeComponent (Component, testFn) {
  describe(`Component: <${Component.name} />`, () => {
    const context = {
      defaultProps: {},

      mount (props = {}, options = {}) {
        return mount(<Component {...context.defaultProps} {...props} />, options)
      },

      shallow (props = {}, options = {}) {
        return shallow(<Component {...context.defaultProps} {...props} />, options)
      },

      tree (props = {}) {
        return create(<Component {...context.defaultProps} {...props} />)
      },

      snapshot (props = {}) {
        return context.tree(props).toJSON()
      }
    }

    testFn(context)
  })
}
