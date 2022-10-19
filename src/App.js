import Header from "./components/Header"


function App () {
    return(
        <>
            {/* JSX comment needs curly brackets - Can set the prop text for this value 
            <Header text='Hello World Destructured'/> */}

            {/* Added color props to the header below. Can set direct like below if not uses default props in header.jsx*/}
            {/* <Header bgColor='red' textColor='blue' /> */}
            
            <Header />
            <div className ='container'>
                <h1>My App</h1>
            </div>
        </>
    )
}


export default App
