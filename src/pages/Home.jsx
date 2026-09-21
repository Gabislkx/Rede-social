import { instagramPosts } from "../services/api";
import logoImg from "../2.png";

import Stories from "../components/Stories/Stories";
import Post from "../components/Post/Post";

import "./Home.css";

function Home() {
    return (
    <main className="home">

        <div className="topo-feed">
            <img
                src={logoImg}
                alt="Nox Social"
                className="logo-nox"
            />

         <Stories posts={instagramPosts} />
        </div>

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