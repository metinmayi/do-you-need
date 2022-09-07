/**
 * Expected response object from the server
 */
export class DYNResponse {
  error: boolean = false;
  message?: string;
  errorMessage?: string;
  data?: any;
}
