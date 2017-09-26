import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logs: string[] = [];

  logInfo(msg: any) { this.log(`INFO: ${msg}`); }
  logDebug(msg: any) { this.log(`DEBUG: ${msg}`); }
  logError(msg: any) { this.log(`ERROR: ${msg}`, true); }

  private log(msg: any, isError = false) {
    this.logs.push(msg);
    isError ? console.error(msg) : console.log(msg);
  }
}
