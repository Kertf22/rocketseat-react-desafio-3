import { useState } from "react";
import Select from "../components/Select"
import UserInfo from "../components/UserInfo"
import UserPosts from "../components/UserPosts"
import PostsHook from "../hooks/PostsHook";
import RepoHook from "../hooks/RepoHook";
import UserHook from "../hooks/UserHook";


const Home = () => {

    // Selectione um repositório 

    // Mostre as issues do repositório selecionado

    // Filtre as issues pelo input

    const [value, setValue] = useState('a');

    const user = UserHook();

    const { repos, selectedRepo, setSelectedRepo } = RepoHook(user?.login);

    const handleSelectRepo = (id: string) => {
        const repo = repos?.find(repo => repo.id === Number(id));
        setSelectedRepo(repo);
    }

    const options = repos?.map(repo => ({
        value: repo.id.toString(),
        label: repo.name
    }))

    const posts = PostsHook({
        username: user?.login,
        repo: selectedRepo?.name,
        texto: value
    });

    const filteredPosts = posts?.filter(post => post.title.includes(value));


    return (
        <>
            <UserInfo user={user} />

            <div className='select-repo'>
                <Select
                    options={options}
                    onChange={(value) => handleSelectRepo(value)}
                />
            </div>


            <UserPosts user={user} posts={filteredPosts} handleInput={setValue} inputValue={value} />
        </>
    )
}

export default Home;