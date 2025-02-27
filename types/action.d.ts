interface SignInWithOAuthParams {
    provider: 'github' | 'google';
    providerAccountId: string;
    user: {
        name: string;
        username: string;
        email: string;
        image: string;
    };
}

interface AuthCredentials {
    name: string;
    email: string;
    password: string;
    username: string;
}