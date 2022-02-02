import React from "react";
import { UserCard as Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";

export function FavUserCard() {
  // const favIconSolid = <FontAwesomeIcon icon={faHeartSolid} />;
  const favIconOutline = (
    <FontAwesomeIcon
      icon={faHeartOutline}
      size="2x"
      //color="rgba(0,0,0,0.3)"
      className="fontAwesomeIcon"
    />
  );

  return (
    <Container>
      <div className="info">
        <div>
          <img
            src="https://github.com/omarcusmoreira.png"
            alt="Foto do Perfil"
          />
        </div>
        <div>
          <strong>Marcus Moreira</strong>
          <p>@marcusmoreira</p>
          <p>24 repositórios</p>
        </div>
      </div>

      <div className="favIcon">{favIconOutline}</div>
    </Container>
  );
}
