import { Route, Routes } from "react-router-dom";
import { RequireAuth } from 'react-auth-kit';

import Accueil from "../views/Accueil";
import QuiSommesNous from "../views/QuiSommesNous";
import ListeResultats from "../views/ListeResultats";
import ListeReservations from "../views/ListeReservations";

export default function Main() {
  return (
    <Routes>
      <Route index element={<Accueil />} />
      <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
      <Route path="/liste-resultats" element={<ListeResultats />} />
      <Route path="/liste-reservations" element={
      <RequireAuth loginPath={'/'}>
          <ListeReservations />
      </RequireAuth> } />
    </Routes>
  );
}
