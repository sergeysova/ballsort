/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { useList, useStore } from 'effector-react';
import styled from 'styled-components';
import {
  $field,
  $moves,
  $state,
  BallColor,
  restartClicked,
  startClicked,
  toMainMenuClicked,
  tubeClicked,
} from './model';

export const HomePage: React.FC = () => {
  const state = useStore($state);

  if (state === 'start') {
    return <StartScreen />;
  }

  return <InPlay />;
};

const StartScreen: React.FC = () => {
  return (
    <Content>
      <Title>
        <span>BALL</span>SORT
      </Title>
      <Button onClick={startClicked} text="Start game" />
    </Content>
  );
};

const $isWon = $state.map((state) => state === 'won');

export const InPlay: React.FC = () => {
  const isWon = useStore($isWon);
  const tubes = useList($field, ({ balls, over, complete }, index) => (
    <Tube
      tube={{ balls, over, complete }}
      position={index}
      onClick={tubeClicked}
    />
  ));

  return (
    <>
      <div>
        <Button onClick={toMainMenuClicked} text="←" />
        <Button onClick={restartClicked} text="Restart" />
        <Moves />
      </div>
      <Container>{tubes}</Container>
      {isWon && <WonScreen />}
    </>
  );
};

type TubeProps = {
  tube: {
    balls: Array<BallColor>;
    over: BallColor | null;
    complete: boolean;
  };
  position: number;
  onClick: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
};

const Tube: React.FC<TubeProps> = ({ tube, position, onClick }) => (
  <TubeHolder onClick={onClick} data-position={position}>
    <TubeTop>{tube.over !== null ? <Ball ball={tube.over} /> : null}</TubeTop>
    <TubeGlass data-complete={tube.complete}>
      {tube.balls.map((color, index) => (
        <Ball key={index} ball={color} />
      ))}
    </TubeGlass>
  </TubeHolder>
);

const colors: Record<BallColor, [string, string]> = {
  0: ['#8F7E22', '#FFE600'],
  1: ['#247516', '#70FF00'],
  2: ['#466799', '#00B2FF'],
  3: ['#29777C', '#00FFF0'],
  4: ['#17206F', '#4A72FF'],
  5: ['#BABABA', '#FFFFFF'],
  6: ['#4C3283', '#9D50FF'],
  7: ['#8B11C5', '#FF00F5'],
  8: ['#9D0D41', '#FF60B5'],
  9: ['#4B0000', '#FF0000'],
  10: ['#79480F', '#FF7A00'],
  11: ['#343434', '#B1B1B1'],
};

const BallComponent: React.FC<{ ball: BallColor; className?: string }> = ({
  className,
  children,
  ball,
}) => (
  <div
    className={className}
    style={
      {
        '--main-color': colors[ball][0],
        '--light-color': colors[ball][1],
      } as React.CSSProperties
    }
    data-number={ball}
  >
    {children}
  </div>
);

const WonScreen = () => {
  const moves = useStore($moves);

  return (
    <Won>
      <h1>You won!</h1>
      <h2>In {moves} moves</h2>
      <Button onClick={toMainMenuClicked} text="New game" />
    </Won>
  );
};

const MovesContent: React.FC<{ className?: string }> = ({ className }) => {
  const count = useStore($moves);

  return <span className={className}>Moves: {count}</span>;
};

const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 300;

  & span {
    text-decoration: underline;
  }
`;

interface Button {
  selected?: boolean;
  text: React.ReactNode;
}

const buttonMap = ({ selected, text }: Button) => ({
  'data-selected': selected ?? false,
  type: 'button',
  children: text,
});

const Button = styled.button.attrs(buttonMap)`
  background-color: white;
  color: black;
  padding: 0.6rem 1rem;
  font-size: 1.3rem;
  margin: 0 0.2rem;
  border: 2px solid lightgray;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #f1f1f1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px lightblue;
    border-color: lightblue;
  }

  &[data-selected='true'] {
    border-color: gray;
    background-color: gray;
    color: white;
  }
`;

const Moves = styled(MovesContent)`
  padding: 0.6rem 0.4rem;
  font-size: 1.3rem;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 38rem;
`;

const Won = styled.div`
  display: flex;
  flex-flow: column;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(6px);
  align-items: center;
  padding-top: 5rem;

  h1,
  h2,
  h3 {
    color: black;
    text-shadow: 0 0 2px white;
  }

  & > * + * {
    margin-top: 1rem;
  }
`;

const TubeHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const TubeTop = styled.div`
  display: flex;
  height: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid lightgray;
`;

const TubeGlass = styled.div<{ 'data-complete': boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
  align-items: center;
  border: 2px solid lightgray;
  border-top: none;
  width: 3rem;
  height: 10rem;
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  border-bottom-left-radius: 2.4rem;
  border-bottom-right-radius: 2.4rem;

  &[data-complete='true'] {
    background-color: lightgray;
  }
`;

const Ball = styled(BallComponent)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid black;
  margin: 1px;
  flex-shrink: 0;
  background: radial-gradient(
    circle at 65% 15%,
    white 1px,
    var(--light-color) 3%,
    var(--main-color) 60%,
    var(--light-color) 100%
  );
  position: relative;

  &::after {
    content: '' attr(data-number) '';
    position: absolute;
    top: 6px;
    left: 10px;
    color: white;
    text-shadow: 0 0 1px black;
    display: none;
  }
`;
