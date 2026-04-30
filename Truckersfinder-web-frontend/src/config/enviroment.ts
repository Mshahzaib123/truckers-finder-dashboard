export type ConfigKeys = 'authUrl' | 'apiUrl'

const configs: Record<ConfigKeys, string> = {
    authUrl: process.env.REACT_APP_AUTH_URL || '',
    apiUrl: process.env.REACT_APP_API_URL || '',
}

export default configs
