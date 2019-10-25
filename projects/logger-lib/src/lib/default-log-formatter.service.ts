import { LogFormatterService } from './log-formatter.service';

export class DefaultLogFormatterService extends LogFormatterService {
  format(message: string): string {
    return message;
  }
}
