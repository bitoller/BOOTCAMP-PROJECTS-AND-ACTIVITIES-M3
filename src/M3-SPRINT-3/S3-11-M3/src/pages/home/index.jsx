import { StyledHome } from "./style";
import { Header } from "../../components/header";
import { Technologies } from "../../components/technologies";
import { TechProvider } from "../../providers/techProvider";

export function Home() {
  return (
    <TechProvider>
      <StyledHome>
        <Header />
        <main>
          <Technologies />
        </main>
      </StyledHome>
    </TechProvider>
  );
}
