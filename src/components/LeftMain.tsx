import React , {useContext, useEffect, useState} from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Container } from './styles/GridStyle.styled';
import { Table } from './styles/GridStyle.styled';
import { Th } from './styles/GridStyle.styled';
import { Td } from './styles/GridStyle.styled';
import { Tr } from './styles/GridStyle.styled';
import { ItemContext } from '../App';// // Define the styled components


interface CalenderProps{
    startDate:number | null;
    endDate:number | null;
}



const LeftMain:React.FC<CalenderProps>=({startDate , endDate})=> {
    const context = useContext(ItemContext);
    
    //However, the better approach is to add a type guard:
    
        if (!context) {
            throw new Error("ItemContext must be used within an ItemContext.Provider");
        }
    
        const { option, setOption } = context;
    

    const today = new Date();
    const todayDate = today.getDate();
    const headers = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const rows = [
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, null, null, null, null, null, null],
    ];
    const [selectedCell, setSelectedCell] = useState<string | null>(null)
    const [weekIndex,setWeekIndex]=useState<number | null>(null);

    useEffect(() => {
        // const startOfWeekDate = new Date(selectedDate);
        // const endOfWeekDate = new Date(startOfWeekDate);
        // endOfWeekDate.setDate(startOfWeekDate.getDate() + 6);
        for(let i=0 ; i<rows.length ; i++)
        {
            for(let j=0 ; j<rows[i].length ; j++)
            {
                if(rows[i][j] == new Date().getDate())
                    setWeekIndex(i);
            }
        }
    
    }, [option]);


    
    const handlleClick=(id:string | null)=>{
        setSelectedCell(id);
    }

   

    
  return (
    <>
    <div>
        <MdKeyboardArrowLeft size="3em" color='#757a79'/>
        <p>August 2024</p>
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
            {rows.map((row, rowIndex) => 
            {

            return (
                <Tr key={rowIndex}
                  isWeek={false}
                >
                {row.map((cell, cellIndex) => {
                    
                    const id : string =`${rowIndex}-${cellIndex}`;
                    const isToday = cell == todayDate && option === "Today";
                    const isSelected = selectedCell === id && cell!==null ;
                    const isWeek = option==="This Week" && weekIndex==rowIndex && cell!==null;
                    const isLastWeek = option==="Last Week" && weekIndex==rowIndex+1 && cell!==null;
                    const isNull:boolean = cell === null;
                    const isYesterday = cell==(todayDate-1) && option==="Yesterday";
                    const isMonth = option==="This Month" && cell!==null;
                    const isLastSeven = option==="Last 7 days" && cell!==null &&(cell<=todayDate && cell>todayDate-7)
                    const isCustom = option === "JA" && cell!==null && endDate!==null && cell<=endDate 
                    const isACustom = option ==="AA" && cell!==null && startDate!==null && endDate!==null && cell>=startDate && cell<=endDate ;

                    return(
                        <Td
                        key={id}
                        onClick={() => handlleClick(id)}
                        isSelected={isSelected}
                        isNull={isNull}
                        isWeek={isWeek}
                        isToday={isToday}
                        isYesterday={isYesterday}
                        isLastWeek={isLastWeek}
                        isMonth={isMonth}
                        isLastSeven={isLastSeven}
                        isCustom={isCustom}
                        isACustom={isACustom}
                      >
                        <p>{cell}</p>
                      </Td>
                    );
                })}
                </Tr>
            )
            }
            )}
        </tbody>

      </Table>
    </Container>

    

    </>
  )
}

export default LeftMain



// import * as React from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import styled from 'styled-components';
// import './LeftStyle.css';


// export default function LeftMain() {
//   const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateCalendar', 'DateCalendar']}>

//             <div style={{ width:"690px" , display:"flex" , height:"40rem", justifyContent:"center", alignItems:"center" }}>
//                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
//             </div>
            

//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }


