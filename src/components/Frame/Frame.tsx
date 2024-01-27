import './Frame.css';

function VerticalSeparator() {
    return (
        <div className='vertical-separator'/>
    );
}

export function Frame(props: {components:React.JSX.Element[], className?: string, frameType?: 'right' | 'full' | 'left'}) {
    console.log(props.frameType);

    switch (props.frameType) {
        case 'right':
            return (
                <>
                    <div className={`frame ${props.className}`}>
                        <div>{props.components}</div>
                        <VerticalSeparator/>
                        {}
                    </div>
                </>
            );

            case 'left':
                return (
                    <>
                        <div className={`frame ${props.className}`}>
                            <VerticalSeparator/>
                            <div>{props.components}</div>
                            {}
                        </div>
                    </>
                );
        
        default:
        case 'full':
            return (
                <>
                    <div className={`frame ${props.className}`}>
                        {props.components}
                    </div>
                </>
            );
        }

}