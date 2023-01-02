import User from "../../types/User";
import "./style.scss";
import { BsArrow90DegLeft, BsGithub } from 'react-icons/bs'
import { FaRegBuilding } from 'react-icons/fa'
import { RiUserFollowLine } from 'react-icons/ri'
import { AiOutlineLink } from 'react-icons/ai'
import Post from "../../types/Post";
import { getDateDiff } from "../../util";
import { useNavigate } from "react-router-dom";

interface UserProfileProps {
    user: User | undefined;
    post: Post | undefined;
}

const PostInfo = ({ user, post }: UserProfileProps) => {

    const navigate = useNavigate();

    const handleOnBack = () => {
        navigate("/");
    }

    return (
        <div className="issue-profile">
            <div className="issue-profile-wrap">
                <div className="issue-profile-wrap-title">
                    <p className="issue-profile-link" onClick={handleOnBack}><BsArrow90DegLeft /> Voltar</p>
                    <a href={post?.html_url} className="issue-profile-link">VER NO GITHUB <AiOutlineLink /></a>
                </div>

                <div className="issue-profile-wrap-title">
                    <h2>
                        {post?.title}
                    </h2>
                </div>

                <ul className="issue-profile-list-extra-info ">
                    <li className="issue-profile-extra-info">
                        <BsGithub />
                        <p className="issue-profile-bio">
                            {user?.login}
                        </p>
                    </li>
                    <li className="issue-profile-extra-info">
                        <FaRegBuilding />
                        <p className="issue-profile-bio">
                            {getDateDiff(new Date(), new Date(post?.created_at ? post?.created_at : ""))}
                        </p>
                    </li>
                    <li className="issue-profile-extra-info">
                        <RiUserFollowLine />
                        <p className="issue-profile-bio">
                            {post?.comments}
                        </p>
                    </li>
                </ul>
            </div>
        </div>

    )

};

export default PostInfo;