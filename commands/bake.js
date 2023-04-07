const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bake')
        .setDescription('Takes two emojis and mashes them together, returning an image of the output emoji'),
    async execute(interaction) {
        await interaction.reply('hi');

    },


};