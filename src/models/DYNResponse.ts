/**
 * Expected response object from the server
 */
export interface DYNResponse {
  error: boolean;
  message: string;
  errorMessage: string;
  data?: any;
}
