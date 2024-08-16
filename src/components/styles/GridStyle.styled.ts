import styled from "styled-components";

export const GridStyle = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1.7fr 0.3fr;
  grid-template-areas: 
    "side left-main left-main right-main right-main"
    "side left-main left-main right-main right-main"
    "side bot bot bot bot";
`;


export const SideBarStyle = styled.div`
  grid-area: side;
  background-color: #fcfefe; /* Example color, you can customize */
  border: 2px solid #757a79;
  color: #757a79;

  h3{
    padding: 1em 1em 1em 3em;
    transition-duration:0.3s;
    width: 10em;
    margin-left: 2em;
    border-radius: 10%;
    display: flex;
    align-self: center;
    cursor: pointer;
    color: black;
    transition-duration: 0.2s;
  }
  h3:hover{
    background-color: #edf7fa;
    cursor: pointer;
    color: #1E398D;
  }
`;


  
export const H3 = styled.h3`
    padding: 1em 1em 1em 3em;
    transition-duration: 0.3s;
    width: 10em;
    margin-left: 2em;
    border-radius: 10%;
    display: flex;
    align-self: center;
    cursor: pointer;
    background-color: '#edf7fa';
    color: '#757a79';
  
    &:hover {
      background-color: yellow;
      color: #1E398D;
    }
  `;





export const LeftMainStyle = styled.div`
  grid-area: left-main;
  background-color: #fcfefe; /* Example color, you can customize */
  border: 2px solid #757a79;
  color: black;
  div:nth-of-type(1){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

    p{
    font-weight: 700;
    font-size: x-large;
    padding: 1em;
    color: #757a79;
    }
  }
`;

export const RightMainStyle = styled.div`
  grid-area: right-main;
  background-color: #fcfefe; /* Example color, you can customize */
  border: 2px solid #757a79;
  color: #e0e0e0;

  div:nth-of-type(1){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

    p{
    font-weight: 700;
    font-size: x-large;
    padding: 1em;
    color: #757a79;
    }
  }
`;

export const BottomStyle = styled.div`
  grid-area: bot;
  background-color: #fcfefe; /* Example color, you can customize */
  border: 2px solid #757a79;
  color: #9ba6a5;
`;


export const BottomButtonStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  div:last-child {
    display: flex;
    gap: 1em;
    
    button:nth-of-type(1) {
    height: 4em;
    font-weight: 600;
    font-size: larger;
    text-align: center;
    background-color:#eaeaea;
      cursor: pointer;
      width: 7em;
      border-radius: 13%;
      transition-duration: 0.1s;

      &:hover {
        background-color: #a7bcb9;
      }
    }

    button:nth-of-type(2) {
    height: 4em;
    font-weight: 600;
    font-size: larger;
    text-align: center;
    background-color:#1E398D;
    color: white;
    cursor: pointer;
    width: 7em;
    border-radius: 13%;
    transition-duration: 0.1s;

      &:hover {
        background-color: white;
        color: #1E398D;
      }
    }
  }
`;
export const DivOne = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin-left: 2em;

   p{
    font-weight: 600;
    font-size: larger;
    padding: 1em;
    color: black;
   }

   input{
    height: 4em;
    font-weight: 600;
    font-size: larger;
    text-align: center;
    background-color:#eaeaea;
   }
`




export const Container = styled.div`
  width: 100%;  // Ensures the container fills its parent width
  height: 60vh; // Adjust as needed to fit your use case
  display: flex;
  justify-content: center; // Center the table horizontally
  align-items: center; // Center the table vertically
`;

// Styled Table component
export const Table = styled.table`
  width: 100%;  // Ensures the table fills the container width
  height: 100%; // Ensures the table fills the container height
`;

// Styled Table Header and Cells
export const Th = styled.th`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  color: black;
`;

interface TrProps{
  isWeek?: boolean;
}



export const Tr=styled.tr<TrProps>`
Td{
    /* background-color: ${({isWeek})=>isWeek ? '#1E398D' :'#fff'}; */
    /* border:2px solid #1E398D; */
    
}
    /* background-color: ${({isWeek})=>isWeek ? '#1E398D' :'#fff'}; */
`



interface TdProps {
  isSelected: boolean;
  isNull?: boolean;
  isWeek?:boolean;
  isToday?:boolean;
  isYesterday?:boolean;
  isLastWeek?:boolean;
  isMonth?:boolean;
  isLastSeven?:boolean;
  isCustom?:boolean;
  isACustom?:boolean;
}


export const Td = styled.td<TdProps>`
  text-align: center;
  border-radius: 50%;
  position: relative; /* Ensures the p element can be absolutely positioned relative to Td */

  p {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: ${({isNull})=>isNull?'default':'pointer'};
    background-color: ${({ isSelected,isWeek,isToday,isYesterday,isLastWeek,isMonth,isLastSeven ,isCustom,isACustom}) =>
      isSelected||isWeek||isToday ||isYesterday||isLastWeek||isMonth||isLastSeven||isCustom||isACustom ? '#1E398D' : '#fff'};
    color: ${({ isSelected,isWeek ,isToday,isYesterday,isLastWeek,isMonth,isLastSeven,isCustom,isACustom}) => (isSelected||isWeek||isToday||isYesterday||isLastWeek||isMonth ||isLastSeven||isCustom||isACustom ? 'white' : 'black')};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute; /* Removes p from normal document flow */
    top: 50%; /* Centers p vertically */
    left: 50%; /* Centers p horizontally */
    transform: translate(-50%, -50%); /* Adjusts position back to truly center the element */
  }
`;


interface RTdProps {
    isLastMonth?:boolean;
    isSelected?:boolean;
    isCustom?:boolean;
    isJCustom?:boolean;
  }

export const RTd = styled.td<RTdProps>`
  text-align: center;
  border-radius: 50%;
  position: relative; /* Ensures the p element can be absolutely positioned relative to Td */

  p {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({ isLastMonth,isSelected,isCustom,isJCustom }) =>
      isLastMonth||isSelected||isCustom||isJCustom ? '#1E398D' : '#fff'};
    color: ${({ isLastMonth,isSelected,isCustom,isJCustom}) => (isLastMonth||isSelected||isCustom||isJCustom ? 'white' : 'black')};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute; /* Removes p from normal document flow */
    top: 50%; /* Centers p vertically */
    left: 50%; /* Centers p horizontally */
    transform: translate(-50%, -50%); /* Adjusts position back to truly center the element */
  }
`;
