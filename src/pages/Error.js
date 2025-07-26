import "./Error.css";

function Error() {
  return (
    <div className="error">
      <div className="message">
        <h1>Erreur 404 - TU VA MOURRIRE!</h1>
        <img src={require('../img/error.webp')} alt="Accident!" />
      </div>
    </div>
  );
}

export default Error;
