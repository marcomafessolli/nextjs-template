import * as React from 'react'
import { render } from '@testing-library/react'

import Index from '../../pages/index'

test('should render', () => {
  const component = render(<Index />)
  expect(component).not.toBeNull()
})
