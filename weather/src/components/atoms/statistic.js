import React, { useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { darken, lighten } from 'polished';

const Statistic = () => {

  const [selectSet, setSelectSet] = useState([
    {
      pickNumber: '숫자',
      pickAnimal: '동물',
      pickFood: '음식',
    }
  ])
  const {pickNumber, pickAnimal, pickFood} = selectSet[0];

  const TestData = [
    { Numbers : [
      {
        value: '1',
      },
      {
        value: '2',
      },
      {
        value: '3',
      }
    ]},
   { Animals : [
      {
        value: '고양이',
      },
      {
        value: '강아지',
      },
      {
        value: '병아리',
      }
    ]},
    { Foods : [
      {
        value: '커피',
      },
      {
        value: '빵',
      },
      {
        value: '귤',
      }
    ]}];

  const onClickSetNumber = (e) => {
    setSelectSet(
      selectSet.map(item => 
        item.pickNumber === e.target.value ? item : {...item, pickNumber: e.target.value} )
    )
  }
  const onClickSetAnimal = (e) => {
    setSelectSet(
      selectSet.map(item => 
        item.pickAnimal === e.target.value ? item : {...item, pickAnimal: e.target.value} )
    )
  }
  const onClickSetFood = (e) => {
    setSelectSet(
      selectSet.map(item => 
        item.pickFood === e.target.value ? item : {...item, pickFood: e.target.value} )
    )
  }

  const onClick = (params) => {
    console.log('클릭', params)

      // setSelectSet(
      //   selectSet.map(item => 
      //     item.pickAnimal === params.target.value ? item : {...item, pickAnimal: params.target.value} )
      // )
  }

return(
  <ThemeProvider
  theme={{
    palette: {
      blue: '#228be6',
      gray: '#495057',
      pink: '#f06595'
    }
  }}
>
    <div>
      {selectSet && selectSet.map((item, index) => 
        <span key={index}>
          {item.pickNumber} / {item.pickAnimal} / {item.pickFood}
        </span>)}
    </div>
      
  <AppBlock>

    <ButtonGroup>
        {TestData.map((data, index) => (
          <div key={index}>
            {index === 0 ?
              <>{data.Numbers.map((x, index) => (
                <StyledButton key={index}>{x.value}</StyledButton>
              ))}</> : 
              index === 1 ?
              <>{data.Animals.map((x, index) => (
                <StyledButton key={index}>{x.value}</StyledButton>
              ))}</> : 
              index === 2 ?
              <>{data.Foods.map((x, index) => (
                <StyledButton key={index}>{x.value}</StyledButton>
              ))}</> : null
            }
          </div>
        ))}

      {/* {Numbers.map(number => (
        <StyledButton key={number.value} onClick = { (e) => {onClick(number, e)} }>
          {number.value}
        </StyledButton>
      ))} */}
    </ButtonGroup>
    선택한 숫자 : {pickNumber}

    <ButtonGroup>
      {/* {Animals.map(animal => (
        <StyledButton key={animal.value} onClick = { (e) => {onClick(animal, e)} }>
          {animal.value}
        </StyledButton>
      ))} */}

    </ButtonGroup>
      선택한 동물 : {pickAnimal}

    <ButtonGroup>
      {/* {Foods.map(food => (
          <StyledButton key={food.value} onClick = { (e) => {onClick(food, e)} }>
            {food.value}
          </StyledButton>
      ))} */}
    </ButtonGroup>
      선택한 음식 : {pickFood}

  </AppBlock>
  </ThemeProvider>
);
}

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin: 0.5rem;
  padding: 1rem;
  width: 7rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

StyledButton.defaultProps = {
  color: 'blue',
  size: 'medium'
};


export default Statistic