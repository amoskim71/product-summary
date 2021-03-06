import React from 'react'
import { render, fireEvent } from '@vtex/test-tools/react'
import { ProductSummaryProvider } from 'vtex.product-summary-context/ProductSummaryContext'

import ProductImage from './ProductImage'

test('should show placeholder on error', () => {
  const productName = 'Ball'
  const mock = {
    product: {
      productName,
      sku: { image: { imageUrl: 'foo' } },
    },
  }

  const { getByAltText, getByTestId } = render(
    <ProductSummaryProvider value={mock}>
      <ProductImage />
    </ProductSummaryProvider>
  )

  const image = getByAltText(productName)

  fireEvent.error(image)
  expect(getByTestId('image-placeholder')).toBeDefined()
})
