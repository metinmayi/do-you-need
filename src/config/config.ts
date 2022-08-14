/**
 * Toggles DEMO vs prod
 */
export const ENVIRONMENT: "production" | "demo" = "production" as const;

/**
 * Sets the domain for the project
 */
export const BASE_URL = "http://localhost:8000/" as const;

/**
 * Current region
 */
export const REGION = 'eu';

/**
 * Redirect URI for blizzard sync
 */
export const REDIRECT_URI = 'http://localhost:3000/synchronize';

/**
 * Client ID for blizzard sync
 */
export const CLIENT_ID = '182681dbb88f41a28f5abe8e2782ab16';

/**
 * Client secret
 */
export const CLIENT_SECRET = 'Vy14wuX0MRLq5UZbQbytmJb6bq2SNqCg';
