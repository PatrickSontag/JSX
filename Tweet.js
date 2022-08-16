const Tweet = (props) => {
    return (
        <div>
            <p>{props.username}<span>-{props.date}</span></p>
            <p><b>{props.message}</b></p>
        </div>
    )
}