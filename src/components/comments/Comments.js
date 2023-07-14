import "./comments.scss"
import mylogo from "../../images/mylogo.png"


const Comments = () => {

    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa alias iusto, unde hic nisi soluta.",
            name: "Ehana",
            userId: 2,
            profilePic: "{ mylogo }",
        },
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa alias iusto, unde hic nisi soluta.",
            name: "Ehana",
            userId: 2,
            profilePic: "{ mylogo }",
        },
    ];


    return (

        <div className="comments">
            <div className="write">
                <img src={mylogo} alt="" />
                <input type="text" placeholder="Write a comment" />
                <button>Send</button>
            </div>
            {
                comments.map(comment => (
                    <div className="comment">
                        <img src={mylogo} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">1 hour ago</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments
