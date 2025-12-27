export interface MenuItem {
    label: string;
    path: string;
}

export const menuItems: MenuItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Proyectos', path: '/proyectos' },
    { label: 'Contacto', path: '/contacto' },
];
