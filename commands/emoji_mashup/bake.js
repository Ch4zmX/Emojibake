const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bake')
        .setDescription('Takes two emojis and mashes them together, returning an image of the output emoji')
        .addStringOption(option =>
            option.setName('base_emoji')  // Add better name later
            .setDescription('The base emoji to combine')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('secondary_emoji') // Add better name later
            .setDescription('The emoji to combine the base with')
            .setRequired(true)),
            
    async execute(interaction) {
        await interaction.reply('hi');
        console.log(`User ${interaction.user.tag} used command ${interaction}`);
    }
};