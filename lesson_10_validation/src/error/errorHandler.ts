export class ErrorHandler extends Error {
  message: string;
  status: number;

  constructor(message: string, status: number = 400) {
    // code = error code
    super(message);
    this.status = status;

    Error.captureStackTrace(this, this.constructor);
  }
}
