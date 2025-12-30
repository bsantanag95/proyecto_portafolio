import type { SidebarKey } from "../types/i18n";

export interface MenuItem {
    key: SidebarKey;
    path: string;
}

export const menuItems: MenuItem[] = [
    { key: 'home', path: '/' },
    { key: 'projects', path: '/projects' },
    { key: 'contact', path: '/contact' },
];
