import "./FlightList.css";
import { Link } from "react-router-dom";


function FlightList({ flights, search }) {
  return (
    <div className="flight">
      {!search && <div>Bienvenue ! A la recherche d'un Vole ?...</div>}

      {search && flights.length === 0 && <div>Vole inexistant essayer a nouveau ... </div>}

      {flights.map((f, index) => (
        <div key={index}>
           <h3>
            {f.origin_country} → {f.destination_country}
          </h3>
          <p><strong>Compagnie :</strong> {f.airline}</p>
          <p><strong>Départ :</strong> {f.departure_date} à {f.departure_time}</p>
          <p><strong>Arrivée :</strong> {f.landing_date} à {f.landing_time}</p>
          <p><strong>Durée :</strong> {f.duration}</p>
          <p><strong>Prix :</strong> {f.price} $</p>
          <p><strong>Places disponibles :</strong> {f.available_seats}</p>

          <Link to={`flight/${f.id}`}>
            <button>Réserver</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
