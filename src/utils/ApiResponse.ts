/**
 * This class represents and standardizes the response format for API calls.
 */
export class ApiResponse {
  private statusCode: number;
  private message: string;
  private success: boolean;
  private data: any;

  constructor(data: any, statusCode: number = 200, message: string = "OK") {
    this.statusCode = statusCode;
    this.message = message;
    this.success = true;
    this.data = data;
  }
}