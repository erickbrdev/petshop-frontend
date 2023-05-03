import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

export default function Header() {
  return (
    <header
      className="flex justify-between h-full p-5 items-center w-full flex-col bg-header 
    sm:bg-header sm:h-24 sm:items-center sm:justify-between sm:p-12 sm:flex sm:flex-row"
    >
      <div className="">
        <p className="text-gray-200 text-3xl sm:text-white sm:text-3xl sm:italic sm:mb-0 mb-5">
          Pets Kcire
        </p>
      </div>

      <div
        className="flex flex-col gap-5 items-center 
        sm:flex sm:gap-10 sm:items-center sm:flex-row"
      >
        <nav className="flex gap-4">
          <a href="#" target="_blank">
            <FacebookLogo
              size={35}
              color="#000"
              className="p-1 bg-white rounded-full"
            />
          </a>
          <a href="#" target="_blank">
            <InstagramLogo
              size={35}
              color="#000"
              className="p-1 bg-white rounded-full"
            />
          </a>
          <a href="#" target="_blank">
            <TwitterLogo
              size={35}
              color="#000"
              className="p-1 bg-white rounded-full"
            />
          </a>
        </nav>

        <div>
          <button className="p-2 border-2 w-32 rounded-lg text-xl bg-yellow-100">
            Pets
          </button>
        </div>
      </div>
    </header>
  );
}
