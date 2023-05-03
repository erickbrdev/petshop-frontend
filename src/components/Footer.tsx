import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import "../mobile/Footer.css";

export default function Footer() {
  return (
    <footer className="bg-footer h-56 p-16">
      <div className="flex justify-between items-center h-full footer-mobile">
        <p className="text-3xl">Pets Kcire</p>

        <nav className="flex gap-4 items-center">
          <a href="#" className="border-b-2 border-black mr-6">
            Home
          </a>
          <a href="#" target="_blank">
            <FacebookLogo
              size={30}
              color="#fff"
              className="bg-black rounded-full p-1"
            />
          </a>
          <a href="#" target="_blank">
            <InstagramLogo
              size={30}
              color="#fff"
              className="bg-black rounded-full p-1"
            />
          </a>
          <a href="#" target="_blank">
            <TwitterLogo
              size={30}
              color="#fff"
              className="bg-black rounded-full p-1"
            />
          </a>
        </nav>
      </div>
      <div></div>
    </footer>
  );
}
