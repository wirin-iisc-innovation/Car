export const AdjustmentsButton = ({
    callback,
    children
} : {
    callback: any,
    children: React.ReactNode
}) => (
    <button onClick={callback} className="button-settings-button-adjustments">
        {children}
    </button>
)