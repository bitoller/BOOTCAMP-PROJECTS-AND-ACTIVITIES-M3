import { v4 as uuid } from "uuid";

export function Form({ onSubmit }) {
  const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const finances = {
      description: form.description.value,
      value: form.value.value,
      type: form.typeOfValue.value,
      id: uuid(),
    };
    onSubmit(finances);
  };
  return (
    <div className="form-container">
      <form onSubmit={submitForm}>
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          id="description-input"
          name="description"
          placeholder="Digite aqui sua descrição"
        ></input>
        <p>Ex: Compra de roupas</p>
        <label htmlFor="value">Valor (R$)</label>
        <input
          type="number"
          step="any"
          id="value-input"
          name="value"
          placeholder="1"
        ></input>
        <label htmlFor="typeOfValue">Tipo de valor</label>
        <select name="typeOfValue" id="type-of-value-input">
          <option value="">Selecione</option>
          <option value="entrada">Entrada</option>
          <option value="despesa">Despesa</option>
        </select>
        <button type="submit" id="submit-button">
          Inserir valor
        </button>
      </form>
    </div>
  );
}
