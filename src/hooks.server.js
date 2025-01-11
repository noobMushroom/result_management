import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
export async function handle({ event, resolve }) {
    const token = event.cookies.get('auth_token');

    if (token) {
        try {
            const decoded = jwt.verify(token, import.meta.env.VITE_JWT_TOKEN);
            event.locals.user = { name: decoded.username };
        } catch (err) {
            event.locals.user = null;
            event.cookies.delete('auth_token');
        }
    } else {
        event.locals.user = null;
    }

    const unauthorised = ['/', '/login'];
    if (!unauthorised.includes(event.url.pathname) && !token) {
        return redirect(307, '/');
    }
    return await resolve(event);
}
