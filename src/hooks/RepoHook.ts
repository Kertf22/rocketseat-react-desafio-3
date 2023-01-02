import axios from "axios";
import { useEffect, useState } from "react";
import Repo from "../types/Repo";

const RepoHook = (login?: string) => {

    const [repos, setRepo] = useState<Repo[]>([]);
    const [selectedRepo, setSelectedRepo] = useState<Repo | undefined>(undefined);

    const fetchRepo = async () => {

        if (login) {
            const { data } = await axios.get<Repo[]>(`https://api.github.com/users/${login}/repos`);

            const filteredRepos = data.filter(repo => repo.open_issues_count > 0);

            setRepo(filteredRepos);
            setSelectedRepo(filteredRepos[0]);
        }

    }

    useEffect(() => {
        fetchRepo();
    }, [login])


    return { repos, selectedRepo, setSelectedRepo };
};

export default RepoHook;