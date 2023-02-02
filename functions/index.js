export async function onRequest(context) {
  // Step 1: Create a URL object from the request
  const  { request, env} = context
  const url = new URL(request.url);

  // Step 2: GET data from the database
  if (url.pathname === '/api/get/comments') {
    const { ps } = env.COMMENTS_DB.prepare('SELECT * from comments');
    const data = await ps.all();
    return new Response(JSON.stringify(data));
  }

  // Step 3: Send POST Data into the database
  if (url.pathname === '/api/post/comments') {
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

  return new Response(JSON.stringify({
    message: 'Hello JSConf Chile!',
    date: `${new Date().toDateString()} : ${new Date().toLocaleTimeString()}`,
    })
  );
}
