import CardWrapper from './card-wrapper';

const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Dont't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            LoginForm
        </CardWrapper>
    );
};

export default LoginForm;
