const Tweet = (props) => {
    return (
        <div>
            <p><b>{props.username}</b><span>-{props.date}</span></p>
            <p><b>{props.message}</b></p>
        </div>
    )
}