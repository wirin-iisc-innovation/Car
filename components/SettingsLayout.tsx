import { ReactNode } from "react";
import LightSettingPage from "../pages/settings/LightsSetting";

const SettingsLayout = ({children} : {children: ReactNode}) => {
    return (
        <>
            <div
            style={
                {
                    width: '1964px',
                    display: 'flex'
                }
            }
        >

            {children}

        </div>
        </>
    )
}

export default SettingsLayout;