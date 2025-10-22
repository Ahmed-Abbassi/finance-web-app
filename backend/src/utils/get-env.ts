//here function that handles the getting of vars in .env file
export function getEnv(key: string, defaultValue?: string): string {
    if(process.env[key]=== undefined){
        if(defaultValue !== undefined){
            return defaultValue;
        }
        else {
            throw new Error(`Environment variable ${key} is not defined and no default value provided.`);
        }
    }
    else{
        return process.env[key];
    }
}