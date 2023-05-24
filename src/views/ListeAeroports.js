import { useCallback, useEffect, useState } from "react";

export default function ListeAeroports() {

    const [airports, setAirports] = useState([]);

    const url = "http://api.aviationstack.com/v1/airports?access_key=0362aa73f9c60679c2e3088d5ab22eb8";

    const loadAirports = useCallback(async () => {
        const response = await fetch(url);
        const airports = await response.json();
        setAirports(airports);
    }, []);

    useEffect(() => {
        
        loadAirports();
        
    }, [loadAirports])//transmet la fonction à useEffect pour permettre de faire une 
    //comparaison avant l'execution d'une mise à jour (didUpdate)

    return (
            <main>

                
                {
                airports.data && airports.data.map(airport => (
                    <ul key={airport.id}>
                        <li>{airport.airport_name}</li>
                    </ul>
                ))
                }
                
        
            </main>
    );
}