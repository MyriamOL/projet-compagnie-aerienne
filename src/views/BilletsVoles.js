import React from "react";

import ResultatBilletsVoles from "../components/ResultatBilletsVoles";

function BilletsVoles() {
  return (
    <main id="BilletsVoles">
      <ResultatBilletsVoles vol="fefe" reservation="fefe" dateDepart="fefe" />
      <ResultatBilletsVoles vol="fefe" reservation="fefe" dateDepart="fefe" />
      <ResultatBilletsVoles vol="fefe" reservation="fefe" dateDepart="fefe" />
      {/* {billetsVoles.data.map((billetsVoles) => (
        <ResultatBilletsVoles
          vol={billetsVoles}
          reservation={billetsVoles}
          dateDepart={billetsVoles}
        />
      ))} */}
    </main>
  );
}

export default BilletsVoles;
