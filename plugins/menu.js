const config = require('../config')
const { cmd, commands } = require('../command')
const { runtime } = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["allmenu","fullmenu"],
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {

        // Group commands by category
        let categories = {}
        commands.forEach(cmd => {
            if (!cmd.category) return
            if (!categories[cmd.category]) categories[cmd.category] = []
            categories[cmd.category].push(cmd.pattern)
        })

        // Header
        let menu = `╭━━━❂ *${config.BOT_NAME}* 🖥️
║ 👑 ᴏᴡɴᴇʀ : *${config.OWNER_NAME}*
║ ⚙️ ᴘʀᴇғɪx : *${config.PREFIX}*
║ 🌐 ᴘʟᴀᴛғᴏʀᴍ : *Heroku*
║ ⏱️ ʀᴜɴᴛɪᴍᴇ : *${runtime(process.uptime())}*
║
`

        // Build menu dynamically
        for (let category in categories) {
            menu += `║ ╭━━══••══━━••⊷
║ ┊ ❂ . *${category.toUpperCase()}*\n`

            categories[category].forEach(cmd => {
                menu += `║ ┊ ❂ . ${config.PREFIX}${cmd}\n`
            })

            menu += `║ ╰━━══••══━━••⊷
║
`
        }

        // Footer
        menu += `╰════────═══════
✦ ${config.DESCRIPTION || 'Explore all bot commands!'}
`

        // Send as forwarded newsletter message
        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/a93xcb.jpg' },
            caption: menu,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: true,
                    title: `${config.BOT_NAME} Menu`,
                    body: config.DESCRIPTION || 'Explore all bot commands!',
                    mediaType: 2,
                    mediaUrl: 'https://github.com',
                    thumbnail: { url: config.MENU_IMAGE_URL || 'https://o.uguu.se/lVabnzAl.jpg' },
                    sourceUrl: 'https://github.com'
                },
                mentionedJid: [m.sender]
            }
        }, { quoted: mek })

    } catch (e) {
        console.log(e)
    }
})
