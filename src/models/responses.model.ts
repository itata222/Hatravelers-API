class Response_ {
  isSuccess;
  statusCode;
  statusText;
  message;
  constructor(
    isSuccess: boolean,
    statusCode: number,
    statusText: string,
    message: string = ""
  ) {
    this.isSuccess = isSuccess;
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.message = message;
  }
}

class SuccessResponse_ extends Response_ {
  data;
  constructor(
    isSuccess: boolean,
    stausCode: number,
    statusText: string,
    message: string,
    data: any
  ) {
    super(isSuccess, stausCode, statusText, message);

    this.data = data;
  }
}

class ErrorResponse_ extends Response_ {
  constructor(
    isSuccess: boolean,
    stausCode: number,
    statusText: string,
    message: string
  ) {
    super(isSuccess, stausCode, statusText, message);
  }
}

export { Response_, SuccessResponse_, ErrorResponse_ };
