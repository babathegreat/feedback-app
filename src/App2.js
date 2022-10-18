// Lesson 11 from React Front to Back 2022 //

function App () {
    const title ="My Blog";
    const body ="My blog post";
    const comments = [
        {id: 1, text: 'Comment One'},
        {id: 2, text: 'Comment Two'},
        {id: 3, text: 'Comment Three'}
    ];

    const loading = false;
    const showComments = false;

    if(loading) return <h1>Loading...</h1>;
    
    const commentBlock = (
        <div className="comments">
            <h3>Comments: {comments.length}</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>

            <ul>
                {comments.map((mystuff, index)=>(
                    <li key={mystuff.id}>{mystuff.text}</li>
                ))}
            </ul>
            </div>
    )


    return(
        <div className="container">
            <h1>{title.toLowerCase()}</h1>
            <p>{body}</p>
            
            {showComments && commentBlock }
        </div>
            
    )    
}

export default App