import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SCountainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
    </SCountainer>
  );
};

const SCountainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40514e;
`;
