require('dotenv').config();

const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.Token)

bot.start(
    (ctx) => {
        let message = 'Welcome to A_Bot'
        ctx.reply(message)
        console.log('Pressed /start');
    }
)

bot.command(
    'register',
    async (ctx) => {
        try {
            ctx.reply('')
        } catch (error){
            console.error('Error');
        }
    }
)

bot.launch()