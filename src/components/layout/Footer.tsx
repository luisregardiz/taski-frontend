import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    const actualYear = new Date().getFullYear();
    return (
        <footer className="p-5 dark:bg-gray-900 dark:text-gray-50 text-gray-900">
            <p className="text-xl font-extrabold">
                &copy; {actualYear} Taski, All rights reserved{" "}
            </p>
        </footer>
    );
};

export default Footer;
