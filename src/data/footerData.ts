import { link } from "fs";
import { title } from "process";

interface DataType {
    title: string;
    links: {
        name: string;
        link: string
    }[]
}

export const footerData: DataType[] = [
    {
        title: "Company Info",
        links: [
            {
                name: "About Us",
                link: "/about"
            },
            {
                name: "Contact Us",
                link: "/contact"
            },
            {
                name: "Carreers",
                link: "/carreers"
            },
            {
                name: "Business With Us",
                link: "/business"
            },
            {
                name: "Find a Store",
                link: "/find-a-store"
            },
            {
                name: "Press & Talent",
                link: "/press"
            }
        ]
    },
    {
        title: "Let Us Help You",
        links: [
            {
                name: "Orders",
                link: "/orders"
            },
            {
                name: "Downloads",
                link: "/downloads"
            },
            {
                name: "Addresses",
                link: "/addresses"
            },
            {
                name: "Lost Password",
                link: "/password"
            }
        ]
    },
    {
        title: "Quick Links",
        links: [
            {
                name: "Special Offers",
                link: "/offers"
            },
            {
                name: "Gift Cards",
                link: "/gift-cards"
            },
            {
                name: "F21 Red",
                link: "/f21-red"
            },
            {
                name: "Privacy Policy",
                link: "/privacy"
            },
            {
                name: "Teams of Use",
                link: "/teams-of-use"
            },
            {
                name: "Portfolio",
                link: "/portfolio"
            }
        ]
    },
    {
        title: "Company",
        links: [
            {
                name: "About Us",
                link: "/about"
            },
            {
                name: "Contact Us",
                link: "/contact"
            },
            {
                name: "Carreers",
                link: "/carreers"
            },
            {
                name: "Business With Us",
                link: "/business"
            },
            {
                name: "Find a Store",
                link: "/find-a-store"
            },
            {
                name: "Press & Talent",
                link: "/press"
            }
        ]
    }
]
