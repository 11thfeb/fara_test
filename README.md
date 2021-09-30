// Display name in group chat interface

// Let's suppose the first person to enter the group is alfred.
//   - Group members: a

// Now suppose the next person to join is alfie. The shortest prefix of alfie that doesn't match with any prefix of alfred is alfi.
//   - Group members: a, alfi

// If the full name of a new person matches with the full name of any person who has joined before, display the full name and add a suffix which indicates how many times the same name has occurred in the list so far. 
// For example, if another person name alfie joins, the list will look like this:
//   - Group members: a, alfi, alfie 2

// Given the list of the persons who have joined the group chat, please figure out what the final list looks like.