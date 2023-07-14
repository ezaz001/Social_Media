import "./stories.scss"

const Stories = () => {

    const stories = [
        {
            id: 1,
            name: "Random",
            image: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/11223918/Story-Writing-Format.jpg"
        },
        {
            id: 2,
            name: "Random",
            image: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/11223918/Story-Writing-Format.jpg"
        },
        {
            id: 3,
            name: "Random",
            image: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/11223918/Story-Writing-Format.jpg"
        },
        {
            id: 4,
            name: "Random",
            image: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/11223918/Story-Writing-Format.jpg"
        },

    ]

    return (
        <div className="stories">
            <div className="userInfo">
                <img src="https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg" alt="" />
                <span>Ehana</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.image} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories
