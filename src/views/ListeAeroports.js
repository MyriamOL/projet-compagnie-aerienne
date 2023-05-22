import { useCallback, useEffect, useState } from "react";

export default function ListeAeroports() {

    const [airports, setAirports] = useState([]);

    const url = "http://api.aviationstack.com/v1/airports?access_key=67485836d8338ebaaf587924c975789f";

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
        <>
            <main>

                { airports.data!==undefined?
                
                airports.data.map(airport => (
                    <ul key={airport.id}>
                        <li>{airport.airport_name}</li>
                    </ul>
                ))
                
                :null}
        
            </main>

        </>
    );
}