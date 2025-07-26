import "./Header.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <header>
      <Link to={"/"} style={{ color: "pink", textDecoration: "none" }}>
        <div className="logo">
          <img src={require("../img/airplane.png")} alt="Logo" />
          <h2>Flight.com</h2>
        </div>
      </Link>

      <Link  to={"/Account"} style={{ color: "pink", textDecoration: "none"}}>
        <div className="account">
          <AccountCircleIcon style={{ scale: 3 }} />
          Mon Compte
        </div>
      </Link>
    </header>
  );
}

export default Header;
