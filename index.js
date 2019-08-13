const { Client, RichEmbed } = require("discord.js");
const config = require("./config.json");
const figlet = require("figlet");

const bot = new Client();
const prefix = config.prefix;
bot.on("ready", () => {
  const Name = bot.user.username;
  console.clear();
  console.log(
    "-------------------------------------------------------------------"
  );
  console.log(`${Name} est prêt depuis ${bot.readyAt} !`);
  figlet(`${Name}`, function(err, data) {
    console.log(data);
    console.log(
      "-------------------------------------------------------------------"
    );
    console.log(``);
  });
  console.log(
    "-------------------------------------------------------------------"
  );
});

bot.on("message", message => {
  if (message.content === prefix + "help") {
    const test = new RichEmbed()
      .setTitle("Bienvenue sur Openbot!")
      .setColor(0x42d7f4)
      .setDescription(`Bon c'est un peu nul pour l'instant, mais c'est en developpement !\n
      vous pouvez faire : **/help** :lollipop: `);
    message.channel.send(test);
  }

  if (message.content === prefix + "avatar") {
    message.channel.send(`votre avatar   ${message.author.avatarURL}`);
    console.log(
      `l'utilisateur ${message.author.tag} à fait la commande avatar.`
    );
  }
});

try {
  bot.login(config.token);
} catch (error) {
  console.error(
    `Désolé, mais le bot ne peut pas se connecter !\nSee error : ${error}`
  );
}
