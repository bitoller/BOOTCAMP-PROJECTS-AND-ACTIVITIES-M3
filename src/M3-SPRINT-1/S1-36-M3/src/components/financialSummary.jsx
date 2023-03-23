import { SummaryCard } from "./summaryCards";

export function FinancialSummary({ finances, remove }) {
  return (
    <div className="summary-container-full">
      <h5>Resumo financeiro</h5>
      {finances.length > 0 ? (
        <ul>
          {finances.map((finance, index) => (
            <li
              className={`${
                finance.type == "entrada" ? "green-border" : "gray-border"
              }`}
              key={index}
            >
              <SummaryCard finance={finance} remove={remove} />
            </li>
          ))}
        </ul>
      ) : (
        <h5 className="summary-text-empty">
          Você ainda não possui nenhum lançamento
        </h5>
      )}
    </div>
  );
}
