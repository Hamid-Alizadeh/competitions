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
  width: 80%;
`;
