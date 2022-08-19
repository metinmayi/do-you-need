/**
 * Toggles DEMO vs prod
 */
export const ENVIRONMENT: "production" | "demo" = "production" as const;

/**
 * Sets the domain for the project
 */
export const BASE_URL = "http://localhost:8000/" as const;

/**
 * API Endpoint for checking if user has a valid token registered to them
 */
export const VALID_TOKEN_URL = `${BASE_URL}blizzard/checkAccessToken`;

/**
 * API for authenticating with blizzard. I.E get forwarded to their website
 */
export const BLIZZARD_AUTH_URL = `${BASE_URL}blizzard/authenticate`

/**
 * API for getting all max level chars belonging to this account
 */
export const GET_CHARS_URL = `${BASE_URL}blizzard/getCharacters`;