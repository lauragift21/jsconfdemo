export async function onRequest(context) {
  return new Response(JSON.stringify({
    message: 'Hello JSConf Chile!',
    date: `${new Date().toDateString()} : ${new Date().toLocaleTimeString()}`,
    })
  );
}
