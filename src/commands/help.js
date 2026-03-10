import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Shows a detailed guide for using the TREMM travel bot"),

  async execute(interaction) {
    await interaction.deferReply();

    const part1 = `
# TREMM Help Guide
## What TREMM Does
TREMM is a travel planning Discord bot that helps users plan trips directly inside Discord.

It can help users find:
- flights
- hotels
- restaurants
- activities
- weather
- full trip summaries
## How To Use Commands
- Type \`/\` in Discord
- Discord will show a list of available commands
- Click the command you want
- Fill in the required inputs
- Press enter to run the command
## Important Input Rules
- Dates should usually be in \`YYYY-MM-DD\` format
- Some commands use normal place names like \`Seattle, WA\` or \`Paris, FR\`
- Some commands use IATA airport codes like \`SEA\`, \`LAX\`, or \`JFK\`
- Better and more specific input usually gives better results

## /plantrip
### What it does
- Starts the trip planning experience
- Helps users begin using TREMM Trip plan Bot
### Inputs
- City you are traveling to 
- Date in  \`YYYY-MM-DD\` format
### Important notes
- Good starting command for first-time users
`;

    const part2 = `
    # TREMM Help Guide
## /trip activties 
### What it does
- Finds activities, attractions, and tours for a destination
### Inputs
- \`destination\`
- Use a real city or place name
- Example: \`Seattle, WA\` or \`Paris, FR\`
### Restrictions
- Destination must be specific enough to geocode correctly
- Vague or invalid locations may return no results with N/A as the output for the activties 
## /resturant
### What it does
- Finds restaurants in a destination
### Inputs
- \`location\`
- Use a real city or place name
- Example: \`Chicago\` or \`Los Angeles, CA\`
### Restrictions
- Vague locations may return weak locations as the range is 
## /weather
### What it does
- Gets current weather and forecast information for a place
### Inputs
- \`place\`
- Example: \`Seattle, WA\` or \`Miami, FL\`
### Restrictions
- Destination must be valid
- Weather shows the next 7 days and not designed to show the weather during date of going
`;
    const part3 = `
    # TREMM Help Guide
## /flights
### What it does
- Searches for flight options
### Inputs
- \`origin\`
- \`destination\`
- \`date\`
- sometimes \`adults\`
### Input format
- Origin and destination should use IATA airport codes
- Example: \`SEA\`, \`LAX\`, \`JFK\`
- Date should be in \`YYYY-MM-DD\` format
- Adults defaut to 1, so change if the plan is diffrent
### Restrictions
- Invalid IATA codes will fail
- Invalid dates will fail
- Flight results depend on route availability, So sometimes it will give you an error if the api cant find anything
## /newhotel
### What it does
- Searches for hotel availability
### Inputs
- \`city\`
- \`check_in\`
- \`check_out\`
- \`adults\`
### Input format
- City should be a valid destination
- Dates should be in \`YYYY-MM-DD\`
- Adults should be a whole number
### Restrictions
- Check-out must be after check-in
- Invalid dates may fail
`;
    const part4 = `
    # TREMM Help Guide
## /tripbrief
### What it does
- Creates a full trip summary using multiple bot features together
### Inputs
- \`destination\`
- \`depart\`
- \`return\`
- optional \`adults\`
- optional \`origin\`
### Input format
- Destination should be a real place like \`Paris, FR\` or \`Los Angeles, CA\`
- Dates should be in \`YYYY-MM-DD\`
- Origin, if used, should be an IATA code like \`SEA\` ( Used for flights)
### Restrictions
- Return date must be after depart date
- More complete input gives better results
## /help
### What it does
- Shows this help guide
### Inputs
- No extra input required
## Final Tips
- Use real and specific destinations
- Use valid IATA airport codes when needed
- Use correct date formatting
- More complete inputs give better results
`;

    await interaction.editReply({ content: part1 });
    await interaction.followUp({ content: part2 });
    await interaction.followUp({ content: part3 });
    await interaction.followUp({ content: part4 });
  },
};