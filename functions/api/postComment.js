export async function onRequest(context) { 
  const { request, env } = context;

  const { author, body } = await request.json();

  if (!author || !body) {
    return new Response('Missing author or body', { status: 400 });
  }
  const { ps } = env.COMMENTS_DB.prepare(
    'INSERT INTO comments (author, post) VALUES (? , ?)'
  ).bind(author, body);

  await ps.run();

  if (ps) {
    return new Response('Comment added', { status: 200 });
  } else {
    return new Response('Something went wrong adding comment', {
      status: 500,
    });
  }
}
