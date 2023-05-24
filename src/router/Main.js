import { Route, Routes } from "react-router-dom";

import Accueil from "../views/Accueil";
import QuiSommesNous from "../views/QuiSommesNous";
import ListeResultats from "../views/ListeResultats";
import ListeAeroports from "../views/ListeAeroports";
import ListeVols from "../views/ListeVols";



export default function Main() {
  return (
    <Routes>
      <Route index element={<Accueil />} />
      <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
      <Route path="/liste-resultats" element={<ListeResultats />} />
      <Route path="/liste-aeroports" element={<ListeAeroports />} />
      <Route path="/liste-vols" element={<ListeVols />} />
      <Route path="/list-aeroports" element={<ListeAeroports />}  />
      

      

    </Routes>
  );
}
