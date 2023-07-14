import Post from "../post/Post";
import "./posts.scss"
import mylogo from "../../images/mylogo.png";


const Posts = () => {

    const posts = [
        {
            id: 1,
            name: "Ehana",
            userId: 1,
            profilePic: "http://localhost:3000/static/media/mylogo.1ecb69e222a39b6cd6ac.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolor?",
            img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        },

        {
            id: 2,
            name: "Ehana",
            userId: 2,
            profilePic: "http://localhost:3000/static/media/mylogo.1ecb69e222a39b6cd6ac.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolor?",
        },
    ];

    return (
        <div className="posts">
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts
