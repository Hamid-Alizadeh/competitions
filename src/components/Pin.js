import React from "react";
import styled from "styled-components";

export default function Pin(props) {
  return (
    <Wrapper>
      <Container>
        <img src={props.imageUrl} alt={props.name} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  padding: 5px;
`;

const Container = styled.div`
  display: flex;
  align-item: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 15px;
    object-fit: cover;
  }
`;
