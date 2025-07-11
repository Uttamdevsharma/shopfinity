import { Link } from "react-router-dom"
import { useAuth } from "../contexts/Auth"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"

const Nav = () => {
  const { userLoggedIn, setUserLoggedIn } = useAuth()

  return (
    <div className="header">
      <div className="container">
        <nav className="header__navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {userLoggedIn && (
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            )}

            {!userLoggedIn && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/sign-up">SignUP</Link>
                </li>
              </>
            )}

            {userLoggedIn && (
              <>
                <li>
                  <Link to="/add-product">Add Product</Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      signOut(auth)
                    }}
                   
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav
