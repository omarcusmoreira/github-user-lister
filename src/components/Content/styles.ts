import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--background);
  color: var(--text-header);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  /* height: 100vh; */

  main {
    display: flex;
    width: 100%;
  }

  .favorites,
  .search {
    h2 {
      margin-bottom: 20px;
    }
  }
  .favorites {
    /* background-color: var(--red-text); */
    width: 70%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    div {
      display: flex;
      flex-direction: column;
      height: 600px;
      align-items: center;
      justify-content: center;

      img {
        height: 300px;
        margin-bottom: 20px;
      }
    }
  }

  .search {
    /* background-color: var(--green-text); */
    width: 30%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;

    .inputContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      input {
        margin-right: 20px;
        text-align: center;
        width: 100%;
        border: 0;
        height: 30px;
        border-radius: 8px;
      }
      button {
        border: 0;
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
    }

    h2 {
      align-self: left;
    }
    .noUser {
      display: flex;
      justify-content: center;
      height: 100%;
      h3 {
        align-self: center;
      }
    }
  }
`;
