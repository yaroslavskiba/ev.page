declare namespace NodeJS {
  export interface ProcessEnv {
    FIREBASE_API_KEY: string;
    MAILER_PASSWORD: string;
    EMAIL_TO_GET: string;
    EMAIL_TO_SEND: string;
    SECRET_KEY: string;
    SITE_KEY: string;
  }
}
