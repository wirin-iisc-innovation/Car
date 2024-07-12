"use client"

import { ReactElement, useState } from "react"
import { SidebarMenuItem } from "./SidebarMenuItem";

type stateHandler = () => void;

interface SettingsSidebarProps {
    items?: string[];
    icons?: ReactElement[];
    selectedItem?: string;
    selectedIndex?: number;
    setSelectedIndex? : any;
}

export const SettingsSidebar = ( {selectedItem, selectedIndex, setSelectedIndex} : SettingsSidebarProps) => {

    const items = [
        'Quick Controls', 'Lights', 'Locks', 'Display', 'Driving', 'Autopilot', 'Safety & Security', 'Service'
      ];
    
      const icons = [
        'quick-controls.svg', 'lights.svg', 'lock.svg', 'display.svg', 'car.svg', 'steering-wheel.svg', 'safety-security.svg', 'service.svg'
      ];
    

    
      const [selectedItemState, setSelectedItem] = useState(items[0]);


    const clickHandle = (clickedItem: string, index: number) => {
        setSelectedIndex(index);
        setSelectedItem(clickedItem);
    }


    return (
        <div
            style={
                {
                    width: '483px',
                    background: '#1c1c1c',
                    color: '#fff',
                    verticalAlign: 'center',
                    paddingTop: '12px',
                    maxHeight: '434px'
                }
            }
        >
        {
            items.map((value, index) => (
                <SidebarMenuItem title={value} isSelected={selectedIndex === index} clickHandler={() => clickHandle(value, index)} icon={icons[index]}/>
            ))
        }
        </div>
    )

}