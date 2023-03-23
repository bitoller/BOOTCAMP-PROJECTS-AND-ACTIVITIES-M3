export function TotalMoney({ finances }) {
  let money = 0;
  if (finances.length > 0) {
    finances.forEach((finance) => {
      if (finance.type == "entrada") {
        money += +finance.value;
      } else {
        money -= +finance.value;
      }
    });
    return (
      <div className="total-value-container">
        <div className="value-container-left">
          <p>Valor total:</p>
          <p>O valor se refere ao saldo</p>
        </div>
        <div className="value-container-right">
          <p>{`R$ ${money.toFixed(2)}`}</p>
        </div>
      </div>
    );
  }
}
