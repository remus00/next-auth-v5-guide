import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import CardWrapper from './card-wrapper';

const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Oops! Something went wrong!"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login"
        >
            <div className="flex w-full justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive w-10 h-10" />
            </div>
        </CardWrapper>
    );
};

export default ErrorCard;
