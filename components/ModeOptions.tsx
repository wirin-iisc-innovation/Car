
const ExteriorModeOptions = (
    {
        options,
        selected,
        callback
    } :
    {
        options: Array<String>,
        selected: String,
        callback: any
    }
) => (
    <div className="div-button-exterior">
    {options.flatMap( (option) => (
        <button className={ selected === option ? "exterior-light-button-option-selected" : "exterior-light-button-option"}
        onClick={() => callback(option)}
        >{option}</button>
    ))}
    </div>
)

export {
    ExteriorModeOptions
}