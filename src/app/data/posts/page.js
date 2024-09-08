import { pool } from '@/lib/db';

async function fetchPosts() {
    try {
        const result = await pool.query('SELECT * FROM posts LIMIT 10');
        return result.rows;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export default async function Home() {
    const posts = await fetchPosts();

    return (
        <div>
            <h1>Posts</h1>
            {Array.isArray(posts) && posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No posts available. There is no posts in db!</p>
            )}
        </div>
    );
}
