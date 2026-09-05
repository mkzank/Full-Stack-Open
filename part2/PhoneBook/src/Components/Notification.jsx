const Notification = ({message, isErr}) => {
    const notiStyle = {
        color: 'green',
        background: 'lightgray',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    const errStyle = {
        color: 'red',
        background: 'lightgray',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    if (!message) {
        return null
    }
    else if (isErr) {
        return (
            <div style={errStyle}>
                {message}
            </div>
        )
    }
    
    return (
        <div style={notiStyle}>
            {message}
        </div>
    )
}

export default Notification