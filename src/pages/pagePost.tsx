import { useParams } from "react-router-dom";
import PostInfo from "../components/PostInfo";
import SelectedPostHook from "../hooks/SelectedPostHook";
import UserHook from "../hooks/UserHook";
import ReactMarkdown from 'react-markdown'


const PagePost = () => {

    const { repo, id } = useParams<{ id: string, repo: string; }>();
    const user = UserHook();

    const post = SelectedPostHook({
        number: Number(id),
        repo,
        username: user?.login
    })
    console.log(post)

    return (
        <>
            <PostInfo user={user} post={post} />
            <div className="post-content">
                <ReactMarkdown>{post ? post.body : ''}</ReactMarkdown>
            </div>
        </>
    )
}
export default PagePost;
