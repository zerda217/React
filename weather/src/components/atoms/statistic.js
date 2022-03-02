import React, { useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { darken, lighten } from "polished";
import { number } from "prop-types";

const Statistic = () => {
  const TestData = [
    {
      Numbers: [
        {
          category: "number",
          value: "1",
        },
        {
          category: "number",
          value: "2",
        },
        {
          category: "number",
          value: "3",
        },
      ],
    },
    {
      Animals: [
        {
          category: "animal",
          value: "고양이",
        },
        {
          category: "animal",
          value: "강아지",
        },
        {
          category: "animal",
          value: "병아리",
        },
      ],
    },
    {
      Foods: [
        {
          category: "food",
          value: "커피",
        },
        {
          category: "food",
          value: "빵",
        },
        {
          category: "food",
          value: "귤",
        },
      ],
    },
  ];

  const [selectSet, setSelectSet] = useState({
    number: "숫자",
    animal: "동물",
    food: "음식",
  });

  const onClick = (props) => {
    console.log("클릭", props.value);

    setSelectSet((prevState) => ({
      number: props.value,
      ...prevState,
    }));
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          gray: "#495057",
          pink: "#f06595",
        },
      }}>
      <div>
        {selectSet &&
          `${selectSet.number} / ${selectSet.animal} / ${selectSet.food}`}
      </div>

      <ButtonGroup>
        {TestData.map((data, index) => (
          <div key={index}>
            {index === 0 ? (
              <>
                {data.Numbers.map((number, index) => (
                  <StyledButton
                    key={index}
                    onClick={(e) => {
                      onClick(number, e);
                    }}>
                    {number.value}
                  </StyledButton>
                ))}
              </>
            ) : index === 1 ? (
              <>
                {data.Animals.map((animal, index) => (
                  <StyledButton
                    key={index}
                    onClick={(e) => {
                      onClick(animal, e);
                    }}>
                    {animal.value}
                  </StyledButton>
                ))}
              </>
            ) : index === 2 ? (
              <>
                {data.Foods.map((food, index) => (
                  <StyledButton
                    key={index}
                    onClick={(e) => {
                      onClick(food, e);
                    }}>
                    {food.value}
                  </StyledButton>
                ))}
              </>
            ) : null}
          </div>
        ))}
      </ButtonGroup>
    </ThemeProvider>
  );
};

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
