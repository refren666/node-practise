export class ErrorHandler extends Error {
  message: string;
  code: number;

  constructor(message: string, code: number = 400) { // code = error code
    super(message);
    this.code = code;

    Error.captureStackTrace(this, this.constructor)
  }
}