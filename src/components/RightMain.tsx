import React, { useContext, useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Container } from './styles/GridStyle.styled';
import { Table } from './styles/GridStyle.styled';
import { Th } from './styles/GridStyle.styled';
import { Td } from './styles/GridStyle.styled';
import styled from 'styled-components';
import { ItemContext } from '../App';
import { RTd } from './styles/GridStyle.styled';
// Define the styled components

interface CalenderProps{
    startDate:number | null;
    endDate:number | null;
}



const RightMain:React.FC<CalenderProps>=({startDate , endDate})=> {

    const context = useContext(ItemContext);
    const [selectedCell, setSelectedCell] = useState<string | null>(null)

    //However, the better approach is to add a type guard:
    
        if (!context) {
            throw new Error("ItemContext must be used within an ItemContext.Provider");
        }
    
        const { option, setOption } = context;

    const headers = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const rows = [
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, null, null, null, null, null, null],
    ];


    const handlleClick=(id:string | null)=>{
        setSelectedCell(id);
    }

    
  return (
    <>
    <div>
        <MdKeyboardArrowLeft size="3em" color='#757a79'/>
        <p>July 2024</p>
        <MdKeyboardArrowRight size="3em" color='#757a79'/>
    </div>

    <Container>
      <Table>
        <thead>
            <tr>
                {headers.map((header, index) => (
                <Th key={index}>{header}</Th>
                ))}
            </tr>
        </thead>

        <tbody>
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                    const isLastMonth = option ==="Last Month" && cell!==null;
                    const id : string =`${rowIndex}-${cellIndex}`;
                    const isSelected = selectedCell === id && cell!==null ;
                    const isCustom = option === "JA" && cell!==null && startDate!==null && cell>=startDate 
                    const isJCustom = option ==="JJ" && cell!==null && startDate!==null && endDate!==null && cell>=startDate && cell<=endDate ;
                    return(
                    <RTd key={cellIndex} 
                    onClick={()=>handlleClick(id)}
                    isLastMonth={isLastMonth}
                    isSelected = {isSelected}
                    isCustom={isCustom}
                    isJCustom={isJCustom}
                    > 
                    <p>{cell}</p>
                    </RTd>
                )})}
                </tr>
            ))}
        </tbody>

      </Table>
    </Container>

    </>
  )
}

export default RightMain;