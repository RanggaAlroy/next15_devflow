
const ROUTES = {
    HOME : "/",
    SIGN_UP : "/sign-up",
    SIGN_IN : "/sign-in",
    ASK_QUESTION : "/ask-question",
    QUESTION : (id : string) => `/question/${id}`,
    PROFILE : (id : string) => `/profile/${id}`,
    TAGS: (id: string) => `/tags/${id}`,
    SIGNIN_WITH_OAUTH: "signin-with-oauth"
}

export default ROUTES