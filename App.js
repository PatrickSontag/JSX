const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name="Nate Nickerson"/>
            <Tweet username="natethegreat" name="Nate Nickerson" date="8/16/22" message="Thanks again for the gloves, Daryl!"/>
            <Tweet username="ronswanson" name="Ron Swanson" date="8/16/22" message="I want all of the bacon and eggs you have."/>
            <Tweet username="chuck99" name="Charles Boyle" date="8/16/22" message="I've never been a bad influence to anybody."/>
            <Person name="Nate Nickerson" age={32} hobbies={['chew gum', 'collect gloves']}/>
            <Person name="Janet Nickerson" age={12} hobbies={['chew gum', 'collect hats']}/>
            <Person name="Randy Nickerson" age={10} hobbies={['chew gum', 'collect socks']}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))