export type Language = {
  [key: string]: {
    success: {
      fetch: string;
      login: string;
      register: string;
      delete: string;
      update: string;
      create: string;
      refreshAccessToken: string;
    };
    validation: {
      generic: string;
      usernamePassword: string;
      minLength: (minLength: number) => string;
      maxLength: (maxLength: number) => string;
      requiredField: string;
      invalidEmail: string;
    };
    accessToken: {
      notFound: string;
      invalid: string;
    };
    refreshToken: {
      notFound: string;
      invalid: string;
    };
    error: {
      generic: string;
      internal: string;
      forbidden: string;
      routeNotFound: string;
      userNotFound: string;
      userNotProvided: string;
      userNotActive: string;
    };
    internalServer: {
      listeningOnPort: (port: string) => string;
      middlewaresLoaded: string;
      routesLoaded: string;
      errorMiddlewaresLoaded: string;
    };
  };
};