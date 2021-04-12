import { StatusCodes, ReasonPhrases } from 'http-status-codes';

interface IError {
  status: number,
  statusText: string,
  reason: string,
}

class BadRequestError extends Error implements IError {
  status: number;
  statusText: string;
  reason: string;
  constructor(reason) {
    super();
    this.status = StatusCodes.BAD_REQUEST;
    this.statusText = ReasonPhrases.BAD_REQUEST;
    this.reason = reason;
  }
}

class NotFoundError extends Error implements IError{
  status: number;
  statusText: string;
  reason: string;
  constructor(entity) {
    super();
    this.status = StatusCodes.NOT_FOUND;
    this.statusText = ReasonPhrases.NOT_FOUND;
    this.reason = `${entity} not found`;
  }
}

class InternalServerError extends Error implements IError{
  status: number;
  statusText: string;
  reason: string;
  constructor() {
    super();
    this.status = StatusCodes.INTERNAL_SERVER_ERROR;
    this.statusText = ReasonPhrases.INTERNAL_SERVER_ERROR;
    this.reason = 'something went wrong';
  }
}

class MongoDuplicateError extends Error implements IError{
  status: number;
  statusText: string;
  reason: string;
  constructor(reason) {
    super();
    this.status = StatusCodes.CONFLICT;
    this.statusText = ReasonPhrases.CONFLICT;
    this.reason = reason;
  }
}

export = {
  BadRequestError,
  NotFoundError,
  InternalServerError,
  MongoDuplicateError,
};
