import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function ProductComponent() {
  const productsData = useSelector((state) => state.allproductsData.AllProductsData);

  console.log("product component data", productsData)
  const renderList= productsData?.map((i)=>{
    // console.log("i",i)
    return(
      <div className='four wide column ' key={i.id}>
      <Link to={`/product/${i.id}`} >
        <div className='ui link cards'>
            <div className='card'>
              <div className='image'>
              <img src={i.image} alt={i.title}/>
              </div>
              <div className='content'>
                <div className='header'>
                { i.title} </div>
                <div className='meta price'>$ 
                {i.price }</div>
                <div className='meta '>
                  {i.category} </div>
              </div>
            </div>
        </div>
     </Link>
   </div>
    )
  })


  return (
  <>
   {renderList}
  </>
  )
}

export default ProductComponent