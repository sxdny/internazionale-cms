import { db } from "~/server/db";

export const dynamic = "force-dynamic";
/*
* Este componente se ejecuta en el servidor
* por lo que el console.log no se verá en el navegador
*/

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col ">
      <div>
        {posts.map((post) => (
          <div key={post.id}>
              <p>{post.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
