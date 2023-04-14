export function TechCard({ tech, modal, editTech }) {
  const clickedButton = () => {
    modal(true);
    editTech(tech);
  };
  return (
    <button onClick={clickedButton}>
      <span>{tech.title}</span>
      <span>{tech.status}</span>
    </button>
  );
}
