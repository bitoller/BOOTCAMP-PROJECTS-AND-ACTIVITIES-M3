export function SummaryCard({ finance, remove }) {
  return (
    <div className="summary-container">
      <div className="summary-left">
        <p>{finance.description}</p>
        <p>{finance.type}</p>
      </div>
      <div className="summary-right">
        <p>{`R$ ${finance.value}`}</p>
        <button onClick={() => remove(finance.id)}>Excluir</button>
      </div>
    </div>
  );
}
