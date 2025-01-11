import { redirect, fail } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

export function load({ locals }) {
    if (locals.user) {
        redirect(303, '/homepage');
    }
}

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        let tokens = [];

        for (let i = 1; i < 11; i++) {
            let token = import.meta.env[`VITE_TOKEN_${i}`];
            tokens.push(token);
        }

        const token = data.get('token');
        const name = data.get('name');
        const jwt_token = import.meta.env.VITE_JWT_TOKEN;

        if (!name) {
            return fail(400, { name, name_missing: true });
        } else if (!token) {
            return fail(400, { token, token_missing: true });
        }

        if (tokens.includes(token)) {
            const auth = jwt.sign(
                {
                    username: name
                },
                jwt_token,
                {
                    expiresIn: '1h'
                }
            );

            cookies.set('auth_token', auth, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                path: '/',
                maxAge: 3600
            });

            return { success: true };
        } else {
            return { success: false, error: 'Wrong token' };
        }
    }
};
