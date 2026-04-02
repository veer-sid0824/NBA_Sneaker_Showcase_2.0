const rawBase = import.meta.env.VITE_API_BASE_URL ?? '';
// Strip surrounding single or double quotes if present and trim whitespace
const API_BASE_URL = rawBase.replace(/^['"]|['"]$/g, '').trim().replace(/\/+$/, '');

export const getApiUrl = (path: string): string => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${API_BASE_URL}${normalizedPath}`;
};