import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("New Blog");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Handy");
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsLoading(true);
        
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsLoading(false);
            history.push("/");
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required/>

                <label>Blog body:</label>
                <textarea 
                    rows="5"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Handy">Handy</option>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                { !isLoading && <button>Add Blog</button> }
                { isLoading && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;