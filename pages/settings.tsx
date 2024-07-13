import { useState } from 'react';
import SettingsLayout from '../components/SettingsLayout'
import { SettingsSidebar } from '../components/SettingsSidebar';
import LightSettingPage from '../components/Settings/LightsSetting';
import QuickControlsSettingsPage from '../components/Settings/QuickControlsPage';

"C:\Users\ayush\Desktop\EV2\Car\pages\Settings\LightsSetting.tsx"
const SettingsPage = () => {

    const [selectedIndex,setIndex] = useState(0);

    return (
        <>
            <SettingsLayout>
                <SettingsSidebar selectedIndex={selectedIndex} setSelectedIndex={setIndex}/>
                
                {
                    (selectedIndex === 0) && <QuickControlsSettingsPage/> ||
                    (selectedIndex === 1) && <LightSettingPage/>
                }

            </SettingsLayout>
        </>
    )
}

export default SettingsPage;