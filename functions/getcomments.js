export async function onRequestGet(context) {
  const { env } = context;
  try {
    // Get all the comments from the KV store called comments_db
    const value = await env.comments_db.list(); 
    const comments = await Promise.all(
      value.keys.map(async key => {
        const comment = await env.comments_db.get(key.name);
        return JSON.parse(comment);
      })
    );
    return new Response(JSON.stringify(comments), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(error.message, {
      status: 500,
    });
  }
};