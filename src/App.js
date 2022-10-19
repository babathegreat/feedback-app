import Header from "./components/Header"


function App () {
    return(
        <>
            {/* JSX comment needs curly brackets - Can set the prop text for this value 
            <Header text='Hello World Destructured'/> */}

            {/* Added color props to the header below */}
            <Header bgColor='red' textColor='blue' />
            <div className ='container'>
                <h1>My App</h1>
            </div>
        </>
    )
}


export default App
