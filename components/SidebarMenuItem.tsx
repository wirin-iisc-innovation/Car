import { MouseEvent, MouseEventHandler, ReactEventHandler, ReactNode } from "react";
import { IconType } from "react-icons";
import { MenuItemIcon } from "./Icon";

type clickFunc = (item: string, index: number) => void

export interface SidebarMenuItemProps {
    title: string;
    isSelected: boolean;
    icon: string;
    clickHandler: ReactEventHandler<any>;
}

export const SidebarMenuItem = ({title, isSelected, icon, clickHandler} : SidebarMenuItemProps) => {

    return (
        <div
            style={
                {
                    color: '#737373',
                    display:'flex',
                    alignItems: 'center',
                    height: '30px',
                    padding: '10px 0',
                    cursor: 'pointer',
                    marginLeft: '38px',
                    opacity: isSelected ? '100%' : '40%',
                }
            }
        >
        
        <button
            onClick={clickHandler}
            style={
                {
                    color: '#ffffff',
                    display:'flex',
                    alignItems: 'center',
                    height: '48px',
                    padding: '10px 0',
                    cursor: 'pointer',

                    fontFamily: 'Urbanist',
                    fontWeight: 600,
                    fontSize: '25px',
                    
                    paddingRight: '10px',
                    marginLeft: '10px',

                    background: 'none',
                    border: 'none'
                }
            }
        >
            {title}
        </button>
        </div>
    );

}