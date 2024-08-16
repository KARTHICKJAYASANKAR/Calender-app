import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import LeftMain from './components/LeftMain';
import RightMain from './components/RightMain';
import Bottom from './components/Bottom';
import GlobalStyles from './components/styles/Global';
import { GridStyle, SideBarStyle, LeftMainStyle, RightMainStyle, BottomStyle } from './components/styles/GridStyle.styled';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createContext } from 'vm';


type ContextType={
    option: string;
    setOption: (option: string) => void;
}

export const ItemContext = React.createContext<ContextType | undefined>(undefined);

function App() {

   

    const [option, setOption] = useState<string>(''); // Added this

    const [startDate , setStartDate] = useState<number | null>(null)  // for custom purpose..
    const [endDate , setEndDate] = useState<number | null>(null)  // for custom purpose..

    const handleSidebarClick = (type:string) => {
        setOption(type);
      };
    

  return (
    <ItemContext.Provider value={{ option,setOption }}>

    <GridStyle>
         <GlobalStyles/>

            <SideBarStyle>
                <SideBar  onClick={handleSidebarClick}/>
            </SideBarStyle>

            <RightMainStyle>
            <LeftMain startDate={startDate} endDate={endDate}/>
            </RightMainStyle>


            <LeftMainStyle>
            <RightMain startDate={startDate} endDate={endDate}/>
            </LeftMainStyle>
            
            <BottomStyle>
                <Bottom setStartDate={setStartDate} setEndDate={setEndDate}/>
            </BottomStyle>
            
    </GridStyle>

    </ItemContext.Provider>
  );
}

export default App;







