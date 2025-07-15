import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/Cart'
import { useAuth } from '../contexts/Auth'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {

	const {userLoggedIn} = useAuth();
	const navigate = useNavigate();

const dispatch = useDispatch();

  return (

    <div className="ingredient">
			<div className="ingredient__image">
				<figure>
					<img src={product.image} alt={product.title} />
				</figure>
			</div>
			<div className="ingredient__title">
				<h3>{product.title}</h3>
			</div>
			<div className="ingredient__content">
				<p>
					<span>${product.price}</span>
				</p>
			</div>
			<div className="ingredient__btn">
				<button
					onClick={() => {
						!userLoggedIn ? navigate('/login') : 
						dispatch (addToCart(product))
					}}
					className="btn-white"
				>
					ADD TO CART
				</button>
			</div>
		</div>
    
  )
}

export default ProductCard