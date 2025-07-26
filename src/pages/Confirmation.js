import "./Confirmation.css";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Confirmation() {
  return (
    <div className="confirmation">
      <div className="yes">
        <CheckCircleIcon style={{color: "pink", width: "50px", scale: 4}}/>
        Réservation confirmée
      </div>
      <Link to={"/"}>
        <button className="youpi">Retour à l'acceuil</button>
      </Link>
    </div>
  );
}

export default Confirmation;
