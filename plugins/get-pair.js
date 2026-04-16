const { cmd } = require('../command');
const axios = require('axios');

// ===============================
// made in by popkid
// ===============================
cmd({
    pattern: "pair",
    alias: ["getpair", "clonebot"],
    react: "✅",
    desc: "Get pairing code for BILAL MD bot",
    category: "download",
    use: ".pair +92307XXXXXXX",
    filename: __filename
}, async (conn, mek, m, { q, senderNumber, reply }) => {
    try {
        const phoneNumber = q ? q.trim() : senderNumber;

        if (!phoneNumber || !phoneNumber.match(/^\+?\d{10,15}$/)) {
            return await reply("❌ Please provide a valid phone number with country code\nExample: .pair +92307XXXXXX");
        }

        // Remove + sign for API
        const cleanNumber = phoneNumber.replace(/\D/g, "");

        // Call API endpoint
        const res = await axios.get(`https://popkidonlineconverted-d9080ba636a6.herokuapp.com/code?number=${cleanNumber}`);
        const code = res.data?.code;

        if (!code) {
            return await reply("❌ Could not retrieve inconnu xd pairing code.");
        }

        const doneMessage = "> *MINI BILAL PAIRING COMPLETED*";
        await reply(`${doneMessage}\n\n*Your pairing code is:* ${code}`);

        await new Promise(resolve => setTimeout(resolve, 2000));
        await reply(`${code}`);

    } catch (err) {
        console.error("Pair1 command error:", err);
        await reply("❌ Error while getting inconnu pairing code.");
    }
});

// ===============================
// Pair 2 (WHITESHADOW-MD)
// ===============================
cmd({
    pattern: "pair2",
    alias: ["getpair2", "clonebot2"],
    react: "✅",
    desc: "Get pairing code for BILAL md bot",
    category: "download",
    use: ".pair2 +92307XXXXXX",
    filename: __filename
}, async (conn, mek, m, { q, senderNumber, reply }) => {
    try {
        const phoneNumber = q ? q.trim() : senderNumber;

        if (!phoneNumber || !phoneNumber.match(/^\+?\d{10,15}$/)) {
            return await reply("❌ Please provide a valid phone number with country code\nExample: .pair2 +92307XXXXXXX");
        }

        // Remove + sign for API
        const cleanNumber = phoneNumber.replace(/\D/g, "");

        // Call API endpoint
        const res = await axios.get(`https://popkidonlineconverted-d9080ba636a6.herokuapp.com/code?number=${cleanNumber}`);
        const code = res.data?.code;

        if (!code) {
            return await reply("❌ Could not retrieve mini inconnu pairing code.");
        }

        const doneMessage = "> *BILAL PAIRING COMPLETED*";
        await reply(`${doneMessage}\n\n*Your pairing code is:* ${code}`);

        await new Promise(resolve => setTimeout(resolve, 2000));
        await reply(`${code}`);

    } catch (err) {
        console.error("Pair2 command error:", err);
        await reply("❌ Error while getting mini popkid pairing code.");
    }
});
  
