import React, { Component } from 'react'
import { path } from 'ramda'
import classNames from 'classnames'
import { Link } from 'vtex.render-runtime'
import { ProductName, ProductPrice } from 'vtex.store-components'
import ProductSummaryContext from './ProductSummaryContext'
import productSummary from './../productSummary.css'
import { productShape } from './../utils/propTypes'

class ProductSummaryCustom extends Component {
  static propTypes = {
    /** Product that owns the informations */
    product: productShape,
    /** Name schema props */
    name: PropTypes.object,
    /** Function that is executed when a product is clicked */
    actionOnClick: PropTypes.func,
  }

  state = {
    isHovering: false,
    isUpdatingItems: false,
  }

  handleMouseLeave = () => {
    this.setState({ isHovering: false })
  }

  handleMouseEnter = () => {
    this.setState({ isHovering: true })
  }

  handleItemsStateUpdate = isLoading =>
    this.setState({ isUpdatingItems: isLoading })

  render() {
    const {
      product,
      actionOnClick,
      name: showFieldsProps
    } = this.props

    const contextProps = {
      product,
      isLoading: this.state.isUpdatingItems,
      isHovering: this.state.isHovering,
      // this.handleItemsStateUpdate,
    }

    const containerClasses = classNames(
      productSummary.container,
      productSummary.containerNormal,
      'overflow-hidden br3 h-100 w-100 flex flex-column justify-between center tc'
    )

    // Link Normal = h-100 flex flex-column

    return (
      <ProductSummaryContext.Provider value={contextProps}>
        <section
          className={containerClasses}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <Link
            className={`${productSummary.clearLink}`}
            page={'store.product'}
            params={{ slug: path(['linkText'], product) }}
            onClick={actionOnClick}
          >
            {this.props.children}
          </Link>
        </section>
      </ProductSummaryContext.Provider>
    )
  }
}

ProductSummaryCustom.getSchema = () => {
  return {
    title: 'editor.productSummary.title',
    description: 'editor.productSummary.description',
  }
}

export default ProductSummaryCustom