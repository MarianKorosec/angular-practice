import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable()
export class DateLoggerService extends LoggerService {
  logInfo(msg: any) { super.logInfo(stamp(msg)); }
  logDebug(msg: any) { super.logDebug(stamp(msg)); }
  logError(msg: any) { super.logError(stamp(msg)); }
}

function stamp(msg: any) { return msg + ' at ' + new Date(); }
