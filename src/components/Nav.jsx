import { Link } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Nav = () => {
  const { userLoggedIn, role } = useAuth();

  return (
    <div className="header">
      <div className="container">
        <nav className="header__navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {userLoggedIn && (
              <>

              {role === "user" && (
                 <li>
                  <Link to="/cart">Cart</Link>
                </li>

              )}
                {role === "admin" && (
                  <li>
                    <Link to="/admin/add-product">Add Product</Link>
                  </li>
                )}

                <li>
                  <button
                    onClick={() => {
                      signOut(auth);
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
