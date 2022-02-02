import React from "react";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <header>
        <div className="logo">
          <h1>Github user lister</h1>
          <h3>A project by Marcus Moreira</h3>
        </div>
        <div className="favs">
          <p>You have 12</p>
          <p>users favorited</p>
        </div>
      </header>
    </Container>
  );
}
