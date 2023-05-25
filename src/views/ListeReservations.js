import ResultatBilletsVoles from "../components/Reservation";
import { useCallback, useEffect, useState } from "react";

function ListeReservations() {

  const [reservations, setReservations] = useState([]);
  
  const url = "http://localhost:8080/api/reservations";

  const loadReservations = useCallback(async () => {
    const response = await fetch(url);
    const dataReservations = await response.json();
    setReservations(dataReservations);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadReservations();
  }, [loadReservations]);

  return (
    <main id="BilletsVoles">      
      <ul className="result-list">
          {reservations &&
            reservations.map((reservation) => (
              <ResultatBilletsVoles
                idList={reservation.idReservation}
                nVol={reservation.numeroVol}
                dateDepart={reservation.dateDepart}
                aerDep={reservation.aeroportDepart}
                aerArr={reservation.aeroportArrivee}
              />
            ))}
        </ul>
      
    </main>
  );
}

export default ListeReservations;
