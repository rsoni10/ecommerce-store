import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent';
import { fetchProducts} from '../redux/actions/ProductAction';
import { useDispatch} from 'react-redux';
function ProductListing() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  return (
    <div className='ui grid container'>
       <ProductComponent/>
    </div>
  )
}

export default ProductListing;