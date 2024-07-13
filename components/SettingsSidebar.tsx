import { ReactElement, useState } from "react"
import { SidebarMenuItem } from "./SidebarMenuItem";
import { MenuItemIcon } from "./Icon";

import { FaLightbulb, FaLock, FaCar, FaKey, FaCog, FaToggleOff } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import { MdDirectionsCar, MdSecurity, MdMiscellaneousServices, MdArrowBack} from 'react-icons/md';


interface SettingsSidebarProps {
    items: string[];
    icons: ReactElement[];
    selectedItem: string;
    selectedIndex: number;
}

export const SettingsSidebar = () => {

    const items = [
        'Quick Controls', 'Lights', 'Locks', 'Display', 'Driving', 'Autopilot', 'Safety & Security', 'Service'
      ];
    
      const icons = [
        'quick-controls.svg', 'lights.svg', 'lock.svg', 'display.svg', 'car.svg', 'steering-wheel.svg', 'safety-security.svg', 'service.svg'
      ];
    

    
      const [selectedItem, setSelectedItem] = useState(items[0]);
      const [selectedIndex, setSelectedIndex] = useState(0);


    const clickHandle = (clickedItem: string, index: number) => {
        setSelectedIndex(index);
        setSelectedItem(clickedItem);
        console.log('HII');
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