const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on(`ready` , () => {
    console.log("Link Start!")
    bot.user.setActivity("Release | x2Swiftz")
});

bot.on(`message`, msg => {
    if (msg.author.bot || !msg.content.startsWith("b!")) return;
    const args = msg.content.slice("b!".length).split(" ");
    const command = args.shift().toLowerCase();

    if(command == "ping") {
        let pingembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .addField("Gateway", `**${bot.ping}ms**`)
        .setThumbnail(bot.user.avatarURL)
        .setFooter("สร้างบอทโดย : x2Swiftz#7119")
        msg.channel.send(pingembed)
        msg.delete();
    };
    if (command == "say"){
            if (!args[0]) return msg.channel.send("กรุณาพิมคำสั่ง y!say <ข้อความ>");
            const sayTxt = args.join(" ");
            msg.channel.send(sayTxt)
            msg.delete();

    };
    if(command == "test") {
        let pingembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTitle("__**Boltz Shop : Buy Robux**__")
        .addField("**เรทวอเล็ต**", `3.5`, true)
        .addField("**เรททรูมันนี่**", `2.8`, true)
        .addField("**อัพเดทเรทล่าสุด**", `27/6/2019`, true)
        .setFooter("สร้างบอทโดย : x2Swiftz#7119")
        msg.channel.send(pingembed)
        msg.delete();
    };
    if(command == "close") {
        let pingembed = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setTitle("__**Boltz Shop : Buy Robux**__")
        .addField("**สถานะร้าน**", `ปิดแล้ว`)
        .addField("**ไม่ควรทักหาคนขายและห้ามโอนเงินตอนร้านปิด**", `ขอบคุณที่มาอุดหนุนนะ`)
        .setFooter("สร้างบอทโดย : x2Swiftz#7119")
        msg.channel.send(pingembed)
        msg.delete();
    };
    if (command == "open") {
        let pingembed = new Discord.RichEmbed()
        .setColor("#7CFC00")
        .setTitle("__**Boltz Shop : Buy Robux**__")
        .addField("**สถานะร้าน**", `เปิดแล้ว`)
        .addField("**วิธีซื้อ R$**", `ให้อ่านที่ช่อง #how-to-buy`)
        .setFooter("สร้างบอทโดย : x2Swiftz#7119")
        msg.channel.send(pingembed)
        msg.delete();
    };
    });

    bot.login("NTkwOTIzNzQ0MDk3MzM3MzUz.XRS8ow.h1VdRX6V2OPcOXLFLQgs8ED4zNo")