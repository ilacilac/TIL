import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <header>
      <Header as="h1">
        <img src="/images/lilac-icon.png" alt="logo" width="20" />
        ilacilac
      </Header>
      <Gnb />
    </header>
  );
}
