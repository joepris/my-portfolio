export interface MenuItem {
    label: string;
    to?: string;
}

export const menuItems: Array<MenuItem> = [
    {
        label: "Education",
        to: "menu-item-0"
    },
    {
        label: "Experience",
        to: "menu-item-1"
    },
    {
        label: "Portfolio",
        to: "menu-item-2"
    },
    {
        label: "Skills",
        to: "menu-item-3"
    },
    {
        label: "Contact",
        to: "menu-item-4"
    }
]