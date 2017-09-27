import { Injectable } from '@angular/core';

@Injectable()
export class MinimalLogger {
  logs: string[];

  logInfo: (msg: string) => void;
}
