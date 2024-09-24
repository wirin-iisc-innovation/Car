
export const SettingsButton = ({
    callback,
    text
} : {
    callback: any,
    text: String
}) => (
    <button onClick={callback} className="button-settings-button">
        {text}
    </button>
)
