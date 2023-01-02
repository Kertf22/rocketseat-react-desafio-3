import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../types/Post";

interface PostHookProps {
    username?: string;
    repo?: string;
    texto?: string;
}

const PostsHook = (params: PostHookProps) => {

    const { username, repo } = params;

    const [posts, setPosts] = useState<Post[]>([]);


    const fetchPosts = async () => {

        if (!username || !repo) return;

        // const apiUrl = `https://api.github.com/search/issues?q=${texto}%20repo:${username}/${repo}`
        const apiUrl = `https://api.github.com/repos/${username}/${repo}/issues`
        // https://api.github.com/repos/Kertf22/desafio-2-rocketseat-nodejs/issues
        const response = await axios.get<Post[]>(apiUrl);

        const data = response.data.map((post) => {
            return {
                ...post,
                repo_name: repo,
            }
        });
        console.log(data)
        setPosts(data);
    }

    useEffect(() => {
        fetchPosts();
    }, [repo])

    return posts;
};

export default PostsHook