import { useContext } from "react";
import { petContext } from "../../providers/petContext";
import { PetCard } from "./PetCard";
import { StyledPetList } from "./style";
import { Loader } from "../Loader";

export function PetList() {
  const { petFull, petsSearchFilter } = useContext(petContext);

  return (
    <>
      {petFull.length > 0 ? (
        <StyledPetList>
          {petsSearchFilter.length === 0
            ? petFull.map((pet, index) => (
                <li key={pet.id}>
                  <PetCard pet={pet} index={index} />
                </li>
              ))
            : petsSearchFilter.map((pet, index) => (
                <li key={pet.id}>
                  <PetCard pet={pet} index={index} />
                </li>
              ))}
        </StyledPetList>
      ) : (
        <Loader />
      )}
    </>
  );
}
