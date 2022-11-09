/**
 * Toggles DEMO vs prod
 */
export const ENVIRONMENT: "production" | "demo" = "demo" as const;

/**
 * Sets the domain for the project
 */
export const BASE_URL = "http://localhost:8000/" as const;
// export const BASE_URL = "https://dynexperiment.herokuapp.com/" as const;

/**
 * URL for logging in
 */
export const LOGIN_URL = `${BASE_URL}authentication/login`;

/**
 * URL for checking authentication
 */
export const AUTHENTICATED_URL = `${BASE_URL}authentication/isAuthenticated`;

/**
 * API Endpoint for checking if user has a valid token registered to them
 */
export const VALID_TOKEN_URL = `${BASE_URL}blizzard/checkAccessToken`;

/**
 * API for authenticating with blizzard. I.E get forwarded to their website
 */
export const BLIZZARD_AUTH_URL = `${BASE_URL}blizzard/authenticate`;

/**
 * API for getting all max level chars belonging to this account
 */
export const GET_CHARS_URL = `${BASE_URL}blizzard/getCharacters`;

/**
 * API for getting the guild status of said player
 */
export const GET_GUILD_URL = `${BASE_URL}blizzard/getCharactersGuild`;

/**
 * API for getting the rank of the player within said guild
 */
export const GET_RANK_URL = `${BASE_URL}blizzard/getPlayersRank`;

/**
 * API for adding a new character's upgrade from a raidbots link.
 */
export const ADD_CHARACTER_UPGRADES = `${BASE_URL}doYouNeed/addCharacterUpgrades`;

/**
 * API for getting character upgrades from a guild.
 */
export const GET_CHARACTER_UPGRADES = `${BASE_URL}doYouNeed/getCharacterUpgrades`;

/**
 * API for getting character upgrades from a guild.
 */
export const DELETE_CHARACTER_UPGRADE = `${BASE_URL}doYouNeed/deleteCharacterUpgrade`;

/**
 * API for getting character upgrades from a guild.
 */
export const TOGGLE_CHARACTER_SELECTED = `${BASE_URL}doYouNeed/toggleCharacterSelected`;

/**
 * API for adding a new guild to the user's guilds.
 */
export const ADD_GUILD_TO_USER = `${BASE_URL}doYouNeed/addGuildToUser`;
