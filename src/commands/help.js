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
TREMM is a travel planning Discord bot built to help users organize a trip from start to finish without leaving Discord. By using slash commands, users can quickly access different parts of trip planning, such as starting a trip plan, finding activities, searching for restaurants, checking weather, looking up flights, viewing hotel options, and generating a combined trip summary. The main goal of TREMM is to make travel planning more convenient by putting useful travel tools into one bot and giving users a simple command-based experience.
## How To Use Commands
- Type \`/\` in Discord
- Discord will show a list of available commands
- Click the command you want
- Fill in the required inputs
- Press enter to run the command
## /plantrip
### What it does
The `/plantrip` command serves as the main starting point for TREMM. It is designed to help users begin the travel-planning process and understand how to use the bot effectively.
### Inputs
- City you are traveling to (Press enter after) 
- Date in  \`YYYY-MM-DD\` format (When it askes you for the planed dates)
### Output
- Confirmation of the city and the dates
### Important notes
- Good starting command for first-time users
- Required to use an actual city and \`YYYY-MM-DD\` 
- Must be followed by other commands for specific travel details
- Doesnt store the data inputed, only readable if you scroll up to the message
`;

    const part2 = `
# TREMM Help Guide
## /trip activties 
### What it does
- The /trip activities command helps users find things to do in a destination. It is used to search for activities, attractions, tours, and experiences in a city so the user can explore options for their trip.
### Inputs
- \`destination\`
- The destination should be a real city or recognizable place name
- Best input format: clear locations such as `Seattle, WA`, `Los Angeles, CA`, or `Paris, FR`
### Output
- A list of activities, attractions, or tours for the destination
- Results that help the user decide what to do during their trip
### Restrictions
- Dependent on API availability
- The destination must be specific enough to be recognized correctly
- Misspelled, vague, or invalid locations may return weak results or no results
- Results depend on what the API has available for that destination
- Larger or more popular destinations may return more detailed results than smaller places
## /resturant
### What it does
- The `/restaurants` command helps users find places to eat in a destination. It is used to search for restaurants in a city or location so users can explore dining options while planning their trip.
### Inputs
- \`location\`
- The location should be a real city or recognizable place name
- Example: \`Chicago\` or \`Los Angeles, CA\`
### Output
- A list of restaurants in the destination
- May include restaurant names, categories, addresses, or search links depending on how the command is implemented
- Gives users food and dining options related to the location they entered
### Restrictions
- The location must be valid and specific enough to be recognized correctly for the API
- Misspelled, vague, or invalid locations may return weak results or no results
- Restaurant results depend on the API data available for that destination
- Larger or more popular cities may return better and more complete results than smaller places
## /weather
### What it does
- The `/weather` command helps users check the weather for a destination. It is used to give weather information for a place so users can better prepare for their trip and understand the conditions they may experience.
### Inputs
- \`place\'
- The place should be a real city or recognizable location
- Example: \`Seattle, WA\` or \`Miami, FL\`
### Output
- Weather information for the destination
- Include current weather with it being extened to th next 7 days offorecast details 
- Gives users weather-related information to help with trip planning
### Restrictions
- The place must be valid and specific enough to be recognized correctly
- Weather shows the next 7 days and not designed to show the weather during date of going on the trip at this moment.
`;
    const part3 = `
    # TREMM Help Guide
## /flights
### What it does
- The `/flights` command helps users search for flight options between two airports. It is used to find possible flight routes for a trip by taking an origin airport, destination airport, departure date, and optional traveler count.
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
### Output
- A list of possible flight options
- Include airline, departure time, arrival time, duration, or price depending on how the command is implemented
### Restrictions
- \`origin\` and \`destination\` must be real 3-letter IATA airport codes
- Invalid airport codes will cause the search to fail or return no results
- \`date\` must be in the correct \`YYYY-MM-DD\` format
- Invalid or unrealistic dates may return errors or no results
- Flight results depend on API availability, route availability, and trip date
- The command may return fewer results if there are limited flights for that route
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