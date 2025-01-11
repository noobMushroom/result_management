import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ cookies }) => {
        cookies.delete('auth_token', {
            path: '/'
        });

        return redirect(303, '/');
    }
};
