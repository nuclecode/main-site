export default async function Home() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/data/posts`, {
            next: { revalidate: 10 },
        });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const allPosts = await res.json();
    return (
        <div className={styles.page}>
            <ul>
              {allPosts.map((post) => (
                  <li key={post.id}>{post.title}</li>
              ))}
            </ul>

            <ol>
              <li>
                This is a test nuclecode project.
              </li>
              <li>Save and see your changes instantly.</li>
            </ol>
        </div>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <div>Error fetching posts. Please try again later.</div>;
  }
}
