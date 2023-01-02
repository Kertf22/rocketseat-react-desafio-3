import Post from "../../types/Post"
import User from "../../types/User"
import Input from "../Input"
import PostComponent from "../Post"
import "./style.scss"


interface UserPostsProps {
    user?: User
    posts?: Post[]
    inputValue: string;
    handleInput: (value: string) => void;
}

const UserPosts = ({ user, posts, inputValue, handleInput }: UserPostsProps) => {



    return (
        <div className="user-posts">
            <div className="user-posts-info">
                <h3>Publicações</h3>
                <span>{posts?.length} publicações</span>
            </div>

            <div className="user-input-wrapper">
                <Input onChange={handleInput} value={inputValue} />

            </div>

            <div className="post-list">
                {
                    posts?.map((post) => (
                        <PostComponent post={post} />
                    ))
                }
            </div>

        </div>
    )
}

export default UserPosts;