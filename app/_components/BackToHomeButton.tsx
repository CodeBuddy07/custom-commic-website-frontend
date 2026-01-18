'use client'

import { ArrowBigLeftDash, House } from "lucide-react";
import Link from "next/link";


const BackToHomeButton = () => {

    return (
        <div className="bg-white w-18 pr-2">
            <Link
                className=" text-gray-700 flex items-center hover:cursor-pointer group"
                href={'/'}
            >
                <ArrowBigLeftDash />
                <div className="border-2 rounded-full px-2 py-1.5 group-hover:ml-1 transition-all flex items-center gap-1">
                    <House size={16} />
                </div>
            </Link>
        </div>
    );
};

export default BackToHomeButton;