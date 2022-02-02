import styled from "styled-components";

export const Container = styled.div`
  header {
    background-color: var(--header-background);
    color: #fff;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px;
    width: 100%;

    .logo {
    }

    .favs {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }
`;
