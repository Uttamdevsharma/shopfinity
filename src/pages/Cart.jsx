import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/Cart";

const Cart = () => {
	
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const totalPrice = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

	return (
		<>
			<div className="account-setting__content">
				<div className="account-setting__content__title">
					<h4>Product list in your cart</h4>
				</div>
				<div className="product-table-container">
					<table>
						<thead>
							<tr>
								<th>Image</th>
								<th>PRODUCT Title</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Subtotal</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item) => (
								<CartItem item={item} key={item.id} />
							))}
						</tbody>
					</table>
				</div>
				<h2 className="total-price">
					You Total Price Will be $ {totalPrice}
				</h2>
				<div className="mt-50">
					<button
						onClick={() => dispatch(clearCart())}
						type="button"
						className="btn-big"
					>
						Clear Cart
					</button>
				</div>
			</div>
		</>
	);
};

// {type: "SOME"}
// {type: "", payload:}

export default Cart;