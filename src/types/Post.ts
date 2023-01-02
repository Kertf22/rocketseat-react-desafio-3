
interface Post {
    id: number;
    body: string;
    state: string
    title: string
    updated_at: string
    created_at: string;
    number: number;
    repo_name: string;
    url: string;
    html_url:string;
    comments: number;
}

export default Post;