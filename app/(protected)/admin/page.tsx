/* CLIENT VERSION */
'use client';
import { admin } from '@/actions/admin';
import FormSuccess from '@/components/form-success';
import RoleGate from '@/components/role-gate';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useCurrentRole } from '@/hooks/useCurrentRole';
import { UserRole } from '@prisma/client';
import { toast } from 'sonner';

const AdminPage = () => {
    const handleApiRouteClick = () => {
        fetch('/api/admin').then((res) => {
            if (res.ok) {
                toast.success('Allowed API Route');
            } else {
                toast.error('Forbidden API Route');
            }
        });
    };

    const handleServerActionClick = () => {
        admin().then((data) => {
            if (data.error) {
                toast.error(data.error);
            }

            if (data.success) {
                toast.success(data.success);
            }
        });
    };

    return (
        <Card className="w-[600px]">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">🔧 ADMIN</p>
            </CardHeader>
            <CardContent className="space-y-4">
                <RoleGate allowRole={UserRole.ADMIN}>
                    <FormSuccess message="You are allowed to see this content!" />
                </RoleGate>

                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="text-sm font-medium">Admin only API route</p>
                    <Button onClick={handleApiRouteClick}>Click to test</Button>
                </div>

                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="text-sm font-medium">Admin only Server Action</p>
                    <Button onClick={handleServerActionClick}>Click to test</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default AdminPage;

/* SERVER VERSION */
/* import { currentRole } from '@/lib/auth';

const AdminPage = async () => {
    const role = await currentRole();
    return <div>Current role : {role}</div>;
};

export default AdminPage; */
