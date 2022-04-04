import React, { useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { darken, lighten } from 'polished';

const Statistic = () => {

  const TestData = {
    Numbers : [1,2,3],
    Animals : ['고양이','강아지','병아리'],
    Foods : ['커피','빵','귤']
};

  const {Numbers, Animals, Foods} = TestData;

  const [selectSet, setSelectSet] = useState({ 
    number: '숫자', animal: '동물', food: '음식' 
  })

  const onClick = (props) => {
    const text = props.target.textContent
    console.log('클릭', text)

    function filter() {
      if (TestData.Numbers.hasOwnProperty(text) === true) {return
        setSelectSet({
        number: `${text}`, ...setSelectSet, 
        })} else if (TestData.Animals.hasOwnProperty(text) === true) {return
          setSelectSet({
          ...setSelectSet, animal: `${text}`,
          })} else if (TestData.Foods.hasOwnProperty(text) === true) {return
            setSelectSet({
            ...setSelectSet, food: `${text}`,
            })} else {return
            setSelectSet({ ...setSelectSet })}
    }
    
    setSelectSet(
      {filter}
    )
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
      {selectSet && 
          `${selectSet.number} / ${selectSet.animal} / ${selectSet.food}`
        }
    </div>
      
    <ButtonGroup>
      {Numbers.map((number, index) => (
        <StyledButton color='pink' key={index} onClick={(number) => {onClick(number)}}>
          {number}
        </StyledButton>
      ))}
      {Animals.map((animal, index) => (
        <StyledButton color='gray' key={index} onClick={(animal) => {onClick(animal)}}>
          {animal}
        </StyledButton>
      ))}
      {Foods.map((food, index) => (
        <StyledButton key={index} onClick={(food) => {onClick(food)}}>
          {food}
        </StyledButton>
      ))}
    </ButtonGroup>

  </ThemeProvider>
);
}


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
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
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
  align-items: center;
  justify-content: center;

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
  color: "blue",
  size: "medium",
};

export default Statistic;
