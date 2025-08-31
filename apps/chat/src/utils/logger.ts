interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
};

class Logger {
  private isDevelopment = process.env.NODE_ENV !== 'production';

  private formatMessage(level: string, message: string, meta?: any): string {
    const timestamp = new Date().toISOString();
    const metaStr = meta ? ` ${JSON.stringify(meta)}` : '';
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${metaStr}`;
  }

  error(message: string, meta?: any): void {
    const formatted = this.formatMessage(LOG_LEVELS.ERROR, message, meta);
    console.error(formatted);
  }

  warn(message: string, meta?: any): void {
    const formatted = this.formatMessage(LOG_LEVELS.WARN, message, meta);
    console.warn(formatted);
  }

  info(message: string, meta?: any): void {
    const formatted = this.formatMessage(LOG_LEVELS.INFO, message, meta);
    console.info(formatted);
  }

  debug(message: string, meta?: any): void {
    if (this.isDevelopment) {
      const formatted = this.formatMessage(LOG_LEVELS.DEBUG, message, meta);
      console.debug(formatted);
    }
  }
}

export const logger = new Logger();