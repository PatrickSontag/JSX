const Person = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3> {props.age >= 18 ? "please go vote!" : "you must be 18"} </h3>
            <p>Learn some information about this person</p>
            <h3>Hobbies</h3>
                <ul>
                    {props.hobbies.map(hobby => <li>{hobby}</li>)}
                </ul>
        </div>
    )

}