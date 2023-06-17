const fs = require('fs')
const chalk = require('chalk')

global.apikey = '801cd30fbcc2fa3d6b87915b' //https://api.lolhuman.xyz
global.rosekey = '-' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = '𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'
global.namaowner = '𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'

//—————「 Setting Owner 」—————//
global.owner = '51945463812'
global.ownernomer = ["51945463812"]
global.premium = ['51945463812']

//—————「 Set Wm 」—————//
global.packname = '𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'
global.author = '𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'
global.prefa = ['#', '$']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/54bdfdfaeadbda3984b82.jpg'
global.isLink = `https://youtube.com/@dryanbot`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
