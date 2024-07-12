
export interface GroupButtonProps {
    title: string;
    isActive: boolean;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

export function GroupButtonItem({title, isActive, clickHandler} : GroupButtonProps) {
    return (
        <button 
        style={
            {
                backgroundColor: isActive ? '#FFFFFF66' : '#333',
                width: '170px',
                height: '48px',
                border: 'none',
                borderRadius: '60px',
                fontFamily: 'Urbanist',
                fontWeight: '500',
                color: '#ffffff',
                fontSize: '20px',
                lineHeight: '24px'
            }
        }

        onClick={clickHandler}
        >
            {title}
        </button>
    );
};