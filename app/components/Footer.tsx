import Image from "next/image"
import Link from "next/link"
const Footer = () => {
    return (
        <footer className="bg-slate-700 pb-28 mt-20 mx-auto justify-between items-center sm:px-16 px-6 py-4 ">
            <div className="footer-links">
                <ul className="flex gap-4 text-white">
                    <li>
                        Home
                    </li>
                    <li>
                        Terms and Conditions
                    </li>
                    <li>
                        Privacy Policy
                    </li>
                    <li>
                        Collection Statement
                    </li>
                    <li>
                        Help
                    </li>
                    <li>
                        Manage Account
                    </li>
                </ul>
            </div>
            <div className="mt-2 text-white text-sm">
                <p>Copyright 2016 DEMO Streaming. All rights reserved.</p>
            </div>
            <div className="social-links flex gap-1 p-2 mt-8">
                <div className="facebook">
                    <Image src="" alt="facebook" />
                </div>
                <div className="twitter">
                    <Image src="" alt="twitter" />
                </div>
                <div className="instagram">
                    <Image src="" alt="instagram" />
                </div>
            </div>
        </footer>
    )
}

export default Footer