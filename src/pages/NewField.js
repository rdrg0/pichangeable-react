import styled from "@emotion/styled";

export default function NewField() {
  return (
    <Container>
      <h1>New Field</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        laboriosam voluptate, quae quidem, dolores quisquam quod, doloribus
        voluptatum, quis quisquam quibusdam.
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #fafafa;
`;
