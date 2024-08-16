import React, { useContext, useState } from "react";
import { H3 } from "./styles/GridStyle.styled";
import { ItemContext } from '../App';


interface SidebarProps {
  onClick: (type: string) => void;
}



const Sidebar: React.FC<SidebarProps> = ({ onClick }) => {

    const context = useContext(ItemContext);
    

    if (!context) {
        throw new Error("ItemContext must be used within an ItemContext.Provider");
    }

    const { option, setOption } = context;


  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number , item:string) => {
    console.log(item);
    
    setActiveIndex(index);
    // console.log(option);
    onClick(item); // Call the onClick prop with the selected menu item
  };


  const menuItems = [
    "Today",
    "Yesterday",
    "This Week",
    "Last Week",
    "Last 7 days",
    "This Month",
    "Last Month",
    "YTD",
    "Custom",
  ];



  return (
    <>
      {menuItems.map((item, index) => (
        <H3
          key={index}
          onClick={() => handleClick(index,item)}
        >
          {item}
        </H3>
      ))}
    </>
  );
};

export default Sidebar;

