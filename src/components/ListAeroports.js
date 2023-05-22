import { useCallback, useEffect, useState } from "react";

export default function ListAeroports() {
  const [users, setUsers] = useState([]);

  const loadUser = useCallback(async () => {
    const response = await fetch(
      "http://api.aviationstack.com/v1/flights?access_key=887e54ae4d12e9624003500c4e68a7c7"
    );
    const users = await response.json();
    setUsers(users);
  }, []);

  useEffect(() => {
    console.log("didMount/didUpdate");

    loadUser();

    return () => {
      console.log("willUnmount");
    };
  }, [loadUser]);
  /* transmet la fonction à useEffect (dépendance) pour permettre de faire une 
  comparaison avant l'execution d'une mise à jour (didUpdate) */

  return <></>;
}
