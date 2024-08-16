import React, { useContext, useState } from 'react'
import { BottomButtonStyle } from './styles/GridStyle.styled'
import { DivOne } from './styles/GridStyle.styled'
import { ItemContext } from '../App';


interface DateProps {
    setStartDate: (date: number | null) => void; // Correctly define the prop type
    setEndDate: (date: number | null) => void; // Correctly define the prop type
}

const Bottom: React.FC<DateProps> = ({ setStartDate , setEndDate }) => {

    const context = useContext(ItemContext);
    
    //However, the better approach is to add a type guard:
    
        if (!context) {
            throw new Error("ItemContext must be used within an ItemContext.Provider");
        }
    
        const { option, setOption } = context;

        const [start , setStart] = useState<string>('');
        const [end , setEnd] = useState<string>('');


        const handleClear = () =>{
            setOption('');
            setStart('');
            setEnd('');
        }
        const handleApply=()=>{
            
            const startString = start.trim()
            const endString = end.trim();

            if ((startString[3] === 'J' || startString[3] === 'j') && 
            (endString[3] === 'A' || endString[3] === 'a')) {
            setOption("JA");
            }

            if ((startString[3] === 'J' || startString[3] === 'j') && 
            (endString[3] === 'J' || endString[3] === 'j')) {
            setOption("JJ");
            }

            if ((startString[3] === 'A' || startString[3] === 'a') && 
            (endString[3] === 'A' || endString[3] === 'a')) {
            setOption("AA");
            }
            
            const startDateNum = parseInt(startString.split(' ')[0] , 10)
            const endDateNum = parseInt(endString.split(' ')[0] , 10)
            setStartDate(startDateNum);
            setEndDate(endDateNum);
        }


  return (
    <BottomButtonStyle>
        <DivOne>
            <input value={start}
            placeholder='XX JUL 2024'
            onChange={(e)=>setStart(e.target.value)}
            />
            <p>to</p>
            <input value={end}
            placeholder='XX AUG 2024'
            onChange={(e)=>setEnd(e.target.value)}
            />
        </DivOne>

        <div>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleApply}>Apply</button>
        </div>
    </BottomButtonStyle>
  )
}

export default Bottom;

