import { logger, consoleTransport } from 'react-native-logs';

const defaultConfig = {
	levels: {
		silly: -1,
		debug: 0,
		info: 1,
		warn: 2,
		error: 3,
	},
	severity: 'debug',
	transport: consoleTransport,
	transportOptions: {
		colors: {
			info: 'blueBright',
			warn: 'yellowBright',
			error: 'redBright',
			silly: 'white',
		},
	},
	async: true,
	dateFormat: 'time',
	printLevel: true,
	printDate: true,
	enabled: true,
};

const log = logger.createLogger<'silly' | 'debug' | 'info' | 'warn' | 'error'>(defaultConfig);

log.debug('Debug message');
log.info({ message: 'hi!' });
log.silly('Silly message');

export default log;