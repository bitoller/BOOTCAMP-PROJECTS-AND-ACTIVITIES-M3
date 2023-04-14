import { useContext, useState } from "react";
import { Modal } from "../modal";
import { TechCard } from "../technologyCard";
import { UserContext } from "../../providers/userProvider";

export function Technologies() {
  const { user } = useContext(UserContext);

  const [modal, setModal] = useState(false);
  const [editTech, setEditTech] = useState(null);

  const showOrHideModal = (hide) => {
    setModal(hide);
  };

  const fillTech = (tech) => {
    setEditTech(tech);
  };
  return (
    <section className="tech-container">
      <div className="tech-container-title">
        <h3>Tecnologias</h3>
        <button onClick={() => setModal(true)}>+</button>
      </div>
      <ul className="techs-list">
        {user.techs && user.techs.length > 0
          ? user.techs.map((tech, index) => (
              <li key={index}>
                <TechCard
                  tech={tech}
                  modal={showOrHideModal}
                  editTech={fillTech}
                />
              </li>
            ))
          : null}
      </ul>
      {modal ? (
        <Modal modal={showOrHideModal} tech={editTech} clearTech={fillTech} />
      ) : null}
    </section>
  );
}
