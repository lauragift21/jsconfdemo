export async function onRequestPost(context) { 
  const { request, env } = context;

  const { slug } = request.params;
  const { author, body } = await request.json();

  if (!author || !body) {
    return new Response('Missing author or body', { status: 400 });
  }
  const { ps } = env.COMMENTS_DB.prepare(
    'INSERT INTO comments (author, post, post_slug) VALUES (? , ? , ?)'
  ).bind(author, body, slug);

  await ps.run();

  if (ps) {
    return new Response('Comment added', { status: 200 });
  } else {
    return new Response('Something went wrong adding comment', {
      status: 500,
    });
  }
}
