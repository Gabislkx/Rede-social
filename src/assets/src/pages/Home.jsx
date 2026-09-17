import { instagramPosts } from "../services/api";

import Stories from "../components/Stories/Stories";
import Post from "../components/Post/Post";

import "./Home.css";

function Home() {
    return (
        <main className="home">
            <Stories posts={instagramPosts} />
            <section className="feed">
                {instagramPosts.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                    />
                ))}
            </section>
        </main>
    );
}

export default Home;