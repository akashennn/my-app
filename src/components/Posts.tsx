import { useSelector } from "react-redux";
import { getPosts } from "../redux/slices/appSlice";

const PostsGroup = () => {
    const posts = useSelector(getPosts)

    return (
        <ul>
            {posts.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
    );
}

export default PostsGroup;