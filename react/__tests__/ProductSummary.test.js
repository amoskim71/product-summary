import React from 'react'
import { mount } from 'enzyme'

import ProductSummary from '../index'

describe('<ProductSummary /> component', () => {
  function renderComponent(customProps) {
    const product = {
      addedOptions: {}
    }
    const intl = {
      formatMessage: {}
    }
    const props = {
      ...customProps,
      product,
      intl,
      runtime: { hints: {} },
    }

    const component = mount(<ProductSummary {...props} />)

    return {
      component,
    }
  }

  it('should be mounted and not break', () => {
    const { component } = renderComponent()
    expect(component).toBeTruthy()
  })
})
