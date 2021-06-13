import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

export default function ProductComponent() {
      const products = useSelector((state) => state.allProducts.products)
      const renderList = products.map((product)=>{
            const {id, title, image, price, category} = product;
            return (
                  <div className="four wide column" key={id}>
                  <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                      <div className="card">
                        <div className="image">
                          <img src={image} alt={title} />
                        </div>
                        <div className="content">
                          <div className="header">{title}</div>
                         <h3> <div className="meta price">$ {price}</div></h3>
                         <h4> <div className="meta">{category}</div></h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                  )
      })

      return(
            <>{renderList} </>
      );
};
