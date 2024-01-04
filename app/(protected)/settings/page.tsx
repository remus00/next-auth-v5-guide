'use client';
import { logout } from '@/actions/logout';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const SettingsPage = () => {
    const user = useCurrentUser();

    return (
        <div className="bg-white p-10 rounded-xl">
            <form>
                <button type="submit" onClick={() => logout()}>
                    Sign out
                </button>
            </form>
        </div>
    );
};

export default SettingsPage;

/* import { auth, signOut } from '@/auth';

const SettingsPage = async () => {
    const session = await auth();

    session?.user.id;

    return (
        <div>
            {JSON.stringify(session)}
            <form
                action={async () => {
                    'use server';
                    await signOut();
                }}
            >
                <button type="submit">Sign out</button>
            </form>
        </div>
    );
};

export default SettingsPage;
 */
