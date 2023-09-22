export async function onRequest(context) {
  return new Response(JSON.stringify({
    message: 'Hello PeerPoint Amsterdam!',
    date: `${new Date().toDateString()} : ${new Date().toLocaleTimeString()}`,
    })
  );
}
