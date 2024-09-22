
export interface ButtonProps {
    title: string;
    isActive: boolean;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({title, isActive, clickHandler} : ButtonProps) {
    return (
        <button
        onClick={clickHandler}
            style={
                {
                    width: '220px',
                    height: '48px',
                    borderWidth: '2px',
                    backgroundColor: '#0E0E0E',
                    borderColor: '#FFFFFF66',
                    fontFamily: 'Urbanist',
                    fontWeight: '500',
                    color: '#ffffff',
                    fontSize: '20px',
                    lineHeight: '24px',
                    borderRadius: '60px',
                    borderStyle: 'solid'
                }
            }
        >
            {title}
        </button>
    );
}