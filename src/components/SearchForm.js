import { useState } from "react";
import "./SearchForm.css";


import CountrySelect from "./MaterialUI/CountrySelect";
import DatePicker from "./MaterialUI/DatePicker";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";



import flights from "../data/flights.json";

const SearchForm = ({ onResults, onSearch }) => { 
  const [from, setFrom] = useState("Egypt"); //usestate location
  const [to, setTo] = useState("France"); // usestate destination
  const [date, setDate] = useState("2025-08-03"); // usestate date
  const [passangers, setPassangers] = useState(""); // usestate number passangers


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      onSearch(true);
      const allFlights = flights;
      // Filter 
      const filteredFlights = allFlights.filter((flight) => {
        return (
          (!from ||
            flight.origin_country.toLowerCase() === from.toLowerCase()) &&
          (!to ||
            flight.destination_country.toLowerCase() === to.toLowerCase()) &&
          (!date || flight.departure_date === date) &&
          (!passangers || flight.available_seats >= passangers)
        );
      });
      onResults(filteredFlights);
    } catch (err) {
      alert("Erreur lors de la recherche.");
    }
  };

  return (
    <div className="SearchForm">
      <h1>Rechercher votre Vole</h1>
      <form onSubmit={handleSubmit}>
        <CountrySelect value={from} onChange={setFrom} label="From" />
        <CountrySelect value={to} onChange={setTo} label="To" />
        <DatePicker date={date} setDate={setDate} />
        <TextField
          label="Nombre de sièges libres"
          type="number"
          value={passangers}
          onChange={(e) => setPassangers(e.target.value)}
        />


        <Button variant="contained" type="submit" className="lalala">Rechercher</Button>
      </form>
    </div>
  );
};

export default SearchForm;
