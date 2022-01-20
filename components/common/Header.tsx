import Link from "next/link";
import { appLogo } from "../obj_paths/images";



function Header() {
  return (
  <header className="flex justify-between items-center font-mono">
      <div className="flex items-center space-x-5">
          <Link href={'/'}>
            <div className="flex items-center cursor-pointer">
                <img className="h-16 object-contain" src={appLogo} alt="logo" />
                <span className="hidden sm:flex">Vlad's World</span>
            </div>
          </Link>
          <ul className="hidden md:flex items-center space-x-5">
             <li className="cursor-pointer">
                <Link href={'/'}>{/** todo */}
                    <span>About</span>
                </Link>
             </li>
             <li className="cursor-pointer">
                <Link href={'/'}>{/** todo */}
                    <span>Contact</span>
                </Link>
             </li>
             <li className="cursor-pointer">
                <Link href={'/'}>{/** todo */}
                    <span className="text-white bg-amber-600 px-4 py-1 rounded-full text-center">Follow</span>
                </Link>
             </li>
          </ul>
      </div>
      <nav >
        <ul className="flex items-center space-x-5 text-amber-600">
             <li className="cursor-pointer">
                <Link href={'/'}>{/** todo */}
                    <span className="">Sign In</span>
                </Link>
             </li>

             <li className="cursor-pointer border px-4 py-1 border-amber-600 rounded-t-md rounded-b-md">
                <Link href={'/'}>{/** todo */}
                    <span className="">Get Started</span>
                </Link>
             </li>
        </ul>
      </nav>
  </header>
  );
}

export default Header;
