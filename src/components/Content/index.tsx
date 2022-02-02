import React from "react";
import { Container } from "./styles";
import { UserCard } from "./UserCard";
import SearchImg from "../../assets/search.svg";
import { useState } from "react";
import { api } from "../../services/client";
import { GithubUser } from "../../interfaces";

export function Content() {
  const [searchedUser, setSearchedUsers] = useState("");
  const [userData, setUserData] = useState<GithubUser>();

  async function getUserData() {
    try {
      const { data } = await api.get<GithubUser>(`/${searchedUser}`);
      setUserData(data);
    } catch (error) {
      console.log("Marcus");
    }
  }

  return (
    <Container>
      <main>
        <div className="favorites">
          <h2>Favoritos</h2>
          <div>
            <img src={SearchImg} alt="Buscando" />
            <h2 style={{ textAlign: "center" }}>
              Voce ainda não tem <br /> favoritos
            </h2>
          </div>
        </div>
        <div className="search">
          <h2>Buscar perfil</h2>
          <div className="inputContainer">
            <input
              placeholder="Entre o nome do perfil"
              value={searchedUser}
              onChange={(e) => setSearchedUsers(e.target.value)}
            />
            <button onClick={getUserData}>B</button>
          </div>
          {userData ? (
            <UserCard
              userName={userData.login}
              name={userData.name}
              repositories={userData.public_repos}
              profilePictureUrl={userData.avatar_url}
              isFav={true}
            />
          ) : (
            <div className="noUser">
              <h3>Nenhum usuário</h3>
            </div>
          )}
        </div>
      </main>
    </Container>
  );
}
