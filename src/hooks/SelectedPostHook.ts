import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../types/Post";

interface SelectedPostHookProps {
    username?: string;
    repo?: string;
    number?: number;
}

const SelectedPostHook = ({ number, repo, username }: SelectedPostHookProps) => {

    const [post, setPost] = useState<Post | undefined>(undefined);

    const fetchPost = async () => {

        if (!username || !repo || !number) return;

        const url = `https://api.github.com/repos/${username}/${repo}/issues/${number}`;
        const { data } = await axios.get<Post>(url);

        setPost(data);
    }

    useEffect(() => {
        fetchPost();
    }, [username])

    return post;
};

export default SelectedPostHook;