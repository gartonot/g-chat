const oAuth = '';
const nick = '';
const channel = '';

const soket = new WebSocket('wss://irc-ws.chat.twitch.tv:443');

soket.addEventListener('open', () => {
  soket.send(`PASS oauth:${oAuth}`);
  soket.send(`NICK ${nick}`);
  soket.send(`JOIN #${channel}`);
  soket.send('CAP REQ :twitch.tv/commands twitch.tv/tags twitch.tv/membership');
})

soket.addEventListener('message', (event) => {
  console.log(event.data);

  // Проверка, жив ли бот
  if(event.data.includes('PING')) soket.send('PONG');
})