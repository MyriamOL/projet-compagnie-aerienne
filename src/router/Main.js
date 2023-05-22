import { Route, Routes } from "react-router-dom";

import Accueil from "../views/Accueil";
import QuiSommesNous from "../views/QuiSommesNous";
import ListeResultats from "../views/ListeResultats";
import ListeAeroports from "../views/ListeAeroports";

export default function Main() {
  return (
    <Routes>
      <Route index element={<Accueil />} />
      <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
      <Route path="/liste-resultats" element={<ListeResultats />} />
      <Route path="/liste-aeroports" element={<ListeAeroports />} />
    </Routes>
  );
}