// upgrade to at least node@14 to require discord.js, if not 16
const Discord = require("discord.js");
const client = new Discord.Client();
const mySecret = process.env['TOKEN'];
// downgrade to node-fetch@2.6.1 in order require node-fetch package
const fetch = require("node-fetch");

// words that the bot will react to
const triggers = ["sad", "depress", "disappoint", "upset"];
// phrases that the bot will respond with
const customEncouragements = [
  "Keep your head up, King.",
  "Suffering is temporary, glory is forever.",
  "Just a reminder that you are a deserving of rest, love, and peace."
]


const getQuote = () => {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
    })
    .then(json => {
      return json[0].q
    })
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`)
});

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content === "$inspire") {
    getQuote().then(quote => msg.channel.send(quote))
  };

  if (triggers.some(word => msg.content.includes(word))) {
    const customResponse = customEncouragements[Math.floor(Math.random() * customEncouragements.length)]

    msg.reply(customResponse);
  };
});

client.login(mySecret);
