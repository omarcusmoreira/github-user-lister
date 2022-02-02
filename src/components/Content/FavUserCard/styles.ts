import styled from "styled-components";

export const UserCard = styled.div`
  background-color: #fff;
  color: var(--text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;

  .info {
    display: flex;
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-right: 20px;
    }
    p {
      font-size: 0.7rem;
    }
  }

  .fontAwesomeIcon {
    color: rgba(0, 0, 0, 0.3);
  }
  .fontAwesomeIcon:hover {
    color: var(--red);
  }
`;
