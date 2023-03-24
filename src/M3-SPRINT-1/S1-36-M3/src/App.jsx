import "./styles/reset.css";
import "./styles/globalStyles.css";
import "./styles/app.css";
import { useState } from "react";
import { Header } from "./components/header";
import { Form } from "./components/form";
import { FinancialSummary } from "./components/financialSummary";
import { TotalMoney } from "./components/totalValue";

function App() {
  const [financialCards, setFinancialCards] = useState([]);

  const submitForm = (finances) => {
    setFinancialCards([...financialCards, finances]);
  };

  const remove = (id) => {
    const newFinancialCards = [...financialCards];
    const index = newFinancialCards.findIndex((x) => x.id == id);
    newFinancialCards.splice(index, 1);
    setFinancialCards(newFinancialCards);
  };
  return (
    <>
      <Header />
      <main>
        <div className="container-left">
          <Form onSubmit={submitForm} />
          <TotalMoney finances={financialCards} />
        </div>
        <div className="container-right">
          <FinancialSummary finances={financialCards} remove={remove} />
        </div>
      </main>
    </>
  );
}

export default App;
