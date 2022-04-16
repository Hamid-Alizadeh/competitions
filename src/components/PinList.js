import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

export default function PinList({ pins }) {
  return (
    <Wrapper>
      <Container>
        {pins.map((pin) => {
          return (
            <Pin
              key={pin.page_id}
              imageUrl={pin.image_url}
              url={pin.url}
              desc={pin.description}
              name={pin.name}
              price={pin.price}
            />
          );
        })}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

const Container = styled.div`
  column-gap: 5px;
  margin: 0 auto;
  height: 100%;
  @media (min-width: 1260px) {
    max-width: 1260px;
    column-count: 5;
  }
  @media (min-width: 1080px) and (max-width: 1260px) {
    max-width: 1080px;
    column-count: 4;
  }
  @media (min-width: 756px) and (max-width: 1080px) {
    max-width: 768px;
    column-count: 3;
  }
  @media (min-width: 0px) and (max-width: 756px) {
    max-width: 504px;
    column-count: 2;
  }
`;
