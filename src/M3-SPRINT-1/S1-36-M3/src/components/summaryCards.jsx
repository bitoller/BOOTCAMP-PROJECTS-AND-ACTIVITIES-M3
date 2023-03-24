export function SummaryCard({ finance, remove }) {
  const financeAux = +finance.value;
  const formattedFinance = financeAux.toFixed(2);
  return (
    <div className="summary-container">
      <div className="summary-left">
        <p>{finance.description}</p>
        <p>{finance.type}</p>
      </div>
      <div className="summary-right">
        <p>{`R$ ${formattedFinance}`}</p>
        <button onClick={() => remove(finance.id)}>Excluir</button>
      </div>
    </div>
  );
}
