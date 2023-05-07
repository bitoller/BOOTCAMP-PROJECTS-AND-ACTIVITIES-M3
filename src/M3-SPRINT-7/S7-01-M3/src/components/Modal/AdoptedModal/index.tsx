import { StyledAdoptedModal } from "./style";
import AdoptedImg from "../../../assets/Adopted.svg";
import { Fireworks } from "@fireworks-js/react";

export function AdoptedModal() {
  return (
    <StyledAdoptedModal role="dialog" className="dialog">
      <figure className="adoptedModal">
        <p>Seu melhor amigo chegou!!!</p>
        <img src={AdoptedImg} alt="" />
      </figure>
      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 100,
          },
        }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
        }}
      />
    </StyledAdoptedModal>
  );
}
