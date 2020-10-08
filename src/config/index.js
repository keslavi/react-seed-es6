import dev from './dev.config';
import local from './config';
import pl1 from './pl1.config';
import pl2 from './pl2.config';
import prod from './prod.config';

const env = (process.env.REACT_APP_CONFIG || '').trim();

// give a little intellisense to the const

/**
 * @type {{api:string,reduxLogger:string, env:string, debug:boolean}}
 */
export const config =
    env === 'dev'
        ? dev : env === 'local'
            ? local
            : env === 'pl1' ? pl1
                : env === 'pl2' ? pl2
                    : env === 'prod' ? prod
                        : dev;

export default config;
