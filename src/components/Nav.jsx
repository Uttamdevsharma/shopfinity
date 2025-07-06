import { Link } from "react-router-dom"

const Nav = () => {
  return (
   <>

   <ul>
    
    <li>
        <Link to="/">Home</Link>
    </li>

    <li>
        <Link to="/cart" >Cart</Link>
    </li>

    <li>
        <Link to="/login" >Login</Link>
    </li>

     <li>
        <Link to="/sign-up" >SignUP</Link>
    </li>

    <li>
        <Link to="/add-product">Add Product</Link>
    </li>


    <li>
        <Link to="/sign-up">Sign Up</Link>
    </li>


   </ul>
   
   
   </>
  )
}

export default Nav