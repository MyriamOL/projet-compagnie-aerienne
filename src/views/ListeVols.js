import { useCallback, useEffect, useState } from "react";

export default function ListeVols() {

    const [vols, setVols] = useState([]);
    const access_key = "2fe135c08478b1b6d0dd2d12ad8e7a1a";
    const dep_iata = "CDG";
    const arr_iata = "GVA";

    const url = `http://api.aviationstack.com/v1/flights?access_key=${access_key}&dep_iata=${dep_iata}&arr_iata=${arr_iata}`;

    const loadVols = useCallback(async () => {
        const response = await fetch(url);
        const vols = await response.json();
        setVols(vols);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {

        loadVols();

    }, [loadVols])

    /* formatteur de date, prend en entree une chaine de charactere representant une date et renvoie en sortie l'heure sous le format hh:mm */
    function dateFormatter(dateStr) {
        const d = new Date(dateStr);
        const h = d.getHours() >= 10 ? d.getHours() : "0" + d.getHours();
        const m = d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes();
        return `${h}:${m}`;
    }

    return (
        <main>
            <ul>
                {
                    vols.data && vols.data.map((vols, index) => (
                        <li key={index}>
                            <div>{vols.arrival.airport}</div>
                            <div>{dateFormatter(vols.departure.scheduled)}</div>
                        </li>
                    ))
                }

            </ul>
        </main>
    );
}