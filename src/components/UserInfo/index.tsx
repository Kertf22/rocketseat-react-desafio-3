import User from "../../types/User";
import "./style.scss";
import { BsGithub } from 'react-icons/bs'
import { FaRegBuilding } from 'react-icons/fa'
import { RiUserFollowLine } from 'react-icons/ri'
import { AiOutlineLink } from 'react-icons/ai'

interface UserProfileProps {
    user: User | undefined
}

const UserInfo = ({ user }: UserProfileProps) => {
    return (
        <div className="user-profile">
            <div className="user-profile-wrap">
                <img className="user-profile-avatar" src={user?.avatar_url} />
            </div>
            <div className="user-profile-wrap">
                <div className="user-profile-wrap-title">
                    <h2>{user?.name}</h2>

                    <a href={user?.html_url} className="user-profile-link">GITHUB <AiOutlineLink /></a>
                </div>

                <div>
                    <p className="user-profile-bio">{user?.bio}</p>
                </div>

                <div>
                    <ul className="user-profile-list-extra-info ">
                        <li className="user-profile-extra-info">
                            <BsGithub />
                            <p className="user-profile-bio">
                                {user?.login}
                            </p>
                        </li>
                        <li className="user-profile-extra-info">
                            <FaRegBuilding />
                            <p className="user-profile-bio">
                                {user?.company ? user.company : 'Not available'}
                            </p>
                        </li>
                        <li className="user-profile-extra-info">
                            <RiUserFollowLine />
                            <p className="user-profile-bio">
                                {user?.followers}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )

};

export default UserInfo;