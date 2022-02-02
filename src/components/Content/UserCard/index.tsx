import React from "react";
import { UserCard as Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";

interface UserProps {
  userName: string | null;
  name: string;
  profilePictureUrl: string;
  repositories: number;
  isFav: boolean;
}

export function UserCard(props: UserProps) {
  const favIconSolid = (
    <FontAwesomeIcon
      icon={faHeartSolid}
      size="2x"
      className="fontAwesomeIconFaved"
    />
  );
  const favIconOutline = (
    <FontAwesomeIcon
      icon={faHeartOutline}
      size="2x"
      className="fontAwesomeIconUnfaved"
    />
  );

  return (
    <Container>
      <div className="info">
        <div>
          <img src={props.profilePictureUrl} alt="Foto do Perfil" />
        </div>
        <div>
          <strong>{props.name}</strong>
          <p>#{props.userName}</p>
          <p>{props.repositories} repositórios</p>
        </div>
      </div>
      <div className="favIcon">
        {props.isFav ? favIconSolid : favIconOutline}
      </div>
    </Container>
  );
}
