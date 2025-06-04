import React from 'react'

const ProductsCard = ({product}) => {
  return (
    <div>
      <img src={product.defaultColorImage} alt="" />
    </div>
  )
}

export default ProductsCard