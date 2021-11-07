import styled from "styled-components";

export const Window = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WorkingPlace = styled.div`
  display: grid;
  grid-auto-rows ;
`;

export const WaterControl = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

export const Tub = styled.div`
  margin-top: 10px;
  display: grid;
  grid-auto-rows: 50px;
  background-color: #66ccff;
  padding: 10px;
`;

export const WaterAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  width: 20px;
  height: 25px;
  background: #2e2c2c;
  border: 1px solid #f56090;
  border-radius: 16px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;

export const Is = styled.div`
  background-color: #3399ff;
`;

export const IsNot = styled.div`
  background-color: #66ccff;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  display: flex;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #252525;
  border-radius: 8px;
  color: #ffffff;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #f56090;
  }
`;
