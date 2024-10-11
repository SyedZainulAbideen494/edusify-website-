import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  10% {
    transform: translateY(-102%);
  }
  25% {
    transform: translateY(-100%);
  }
  35% {
    transform: translateY(-202%);
  }
  50% {
    transform: translateY(-200%);
  }
  60% {
    transform: translateY(-302%);
  }
  75% {
    transform: translateY(-300%);
  }
  85% {
    transform: translateY(-402%);
  }
  100% {
    transform: translateY(-400%);
  }
`;

const Card = styled.div`
  --bg-color: #212121;
  background-color: var(--bg-color);
  padding: 10px;
  border-radius: 1.25rem;
`;

const Loader = styled.div`
  color: rgb(124, 124, 124);
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 25px;
  box-sizing: content-box;
  height: 40px;
  padding: 10px 10px;
  display: flex;
  border-radius: 8px;
`;

const Words = styled.div`
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }
`;

const Word = styled.span`
  display: block;
  height: 100%;
  padding-left: 6px;
  color: #956afa;
  animation: ${spin} 4s infinite;
`;

const LoadingCard = () => {
  return (
    <Card>
      <Loader>
        <p>Loading</p>
        <Words>
          <Word>buttons</Word>
          <Word>forms</Word>
          <Word>switches</Word>
          <Word>cards</Word>
          <Word>buttons</Word>
        </Words>
      </Loader>
    </Card>
  );
};

export default LoadingCard;
