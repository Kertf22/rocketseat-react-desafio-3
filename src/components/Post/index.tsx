import { useNavigate } from "react-router-dom";
import Post from "../../types/Post"
import { getDateDiff } from "../../util";
import "./style.scss"

interface PostProps {
    post: Post
}

const PostComponent = ({ post }: PostProps) => {

    const today = new Date();
    const post_date = new Date(post.created_at);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/post/${post.repo_name}/${post.number}`)
    }

    return (
        <div className="card-post" onClick={handleClick}>
            <div className="card-post-header">
                <h1 className="card-post-title">{post.title}</h1>
                <span className="card-post-date">{getDateDiff(today, post_date)}</span>
            </div>
            <div className="card-post-body">
                <p className="card-post-text">{post.body}</p>


            </div>
        </div>
    )
}

export default PostComponent