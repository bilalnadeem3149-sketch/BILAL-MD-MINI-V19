const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "bot"],
    desc: "Get WhatsApp link device instructions",
    react: "🔗",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {

    try {
        const link = "https://popkidonlineconverted-d9080ba636a6.herokuapp.com";

        const message = `╭───『 ${config.BOT_NAME} PAIRING GUIDE 』───⳹
│
│ 🔗 *Link Device Website*
│ ${link}
│
│ 📌 *How to Connect Your WhatsApp*
│
│ 1️⃣ Click the link above
│ 2️⃣ Enter your WhatsApp number
│    • Use *international format*
│    • Example: +92307XXXXXX
│
│ 3️⃣ Click *Request Code*
│ 4️⃣ Wait for the pairing code
│ 5️⃣ Open WhatsApp on your phone
│
│ 📱 *WhatsApp Steps*
│ • Open WhatsApp
│ • Tap the three dots (⋮)
│ • Select *Linked Devices*
│ • Tap *Link a Device*
│ • Enter the pairing code
│
│ ✅ Your WhatsApp will be connected
│    to the bot successfully
│
╰────────────────⳹
> ${config.DESCRIPTION}`;

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL || 'https://o.uguu.se/lVabnzAl.jpg' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: mek });

        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/kfsn0s.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error("Pair command error:", error);
        reply(`❌ Error: ${error.message}`);
    }
});
