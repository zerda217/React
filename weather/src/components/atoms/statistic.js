import { number } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

const Statistic = () => {

  // const [selectNumber, setSelectNumber] = useState('');

  // const onClickNumber = (e) => {
  //   setSelectNumber(e.target.value)  
  // }

  // const [selectAnimal, setSelectAnimal] = useState('');

  // const onClickAnimal = (e) => {
  //   setSelectAnimal(e.target.value)
  // }

  // const [selectFood, setSelectFood] = useState('');

  // const onClickFood = (e) => {
  //   setSelectFood(e.target.value)
  // }

  const [selectSet, setSelectSet] = useState([
    {
      pickNumber: '숫자',
      pickAnimal: '동물',
      pickFood: '음식',
    }
  ])
  const {pickNumber, pickAnimal, pickFood} = selectSet[0];

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

  console.log(selectSet)


return(
  <div>
    <div>
      {selectSet
      &&
        selectSet.map((item, index) => 
        <span key={index}>
          {item.pickNumber} / {item.pickAnimal} / {item.pickFood}
        </span>)}
    </div>

    <div onClick={onClickSetNumber}>
    <StyledButton value='1'>1</StyledButton>
    <StyledButton value='2'>2</StyledButton>
    <StyledButton value='3'>3</StyledButton>
    선택한 숫자 : {pickNumber}
    </div>

  <div onClick={onClickSetAnimal}>
    <StyledButton value='고양이'>고양이</StyledButton>
    <StyledButton value='강아지'>강아지</StyledButton>
    <StyledButton value='병아리'>병아리</StyledButton>
    선택한 동물 : {pickAnimal}
  </div>

  <div onClick={onClickSetFood}>
    <StyledButton value='아포카토'>아포카토</StyledButton>
    <StyledButton value='바게트빵'>바게트빵</StyledButton>
    <StyledButton value='핫케이크'>핫케이크</StyledButton>
    선택한 음식 : {pickFood}
  </div>

  </div>
);
}

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

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

export default Statistic