import { Route, Routes } from "react-router-dom";

import Accueil from "../views/Accueil";
import QuiSommesNous from "../views/QuiSommesNous";
import ListeResultats from "../views/ListeResultats";
import ListeAeroports from "../views/ListeAeroports";
<<<<<<< HEAD
import BilletsVoles from "../views/BilletsVoles";
=======
import ListeVols from "../views/ListeVols";
>>>>>>> 2267fe8151dbf13d5a0a20f79ad164a927bb9748

export default function Main() {
  return (
    <Routes>
      <Route index element={<Accueil />} />
      <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
      <Route path="/liste-resultats" element={<ListeResultats />} />
      <Route path="/liste-aeroports" element={<ListeAeroports />} />
<<<<<<< HEAD
      <Route path="/billets-voles" element={<BilletsVoles />} />
=======
      <Route path="/liste-vols" element={<ListeVols />} />
>>>>>>> 2267fe8151dbf13d5a0a20f79ad164a927bb9748
    </Routes>
  );
}
