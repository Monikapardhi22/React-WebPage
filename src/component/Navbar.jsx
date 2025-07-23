import React from "react";

export default function Navbar() {
  const menuLinks = [
    {
      id: 1,
      name: "Menu",
      link: "/#menu",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/#blog",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "#",
    },
    {
      id: 2,
      name: "Top rated",
      link: "#",
    },
    {
      id: 1,
      name: "Best Selling",
      link: "#",
    },
    {
      id: 1,
      name: "Costly",
      link: "#",
    },
  ];
  return (
    <div
      className="bg-white light:bg-gray-900 
    duration-200 relative light:text-black z-40 "
    >
      <div className="py-4 ">
        <div
          className="container flex
         justify-between items-center gap-4"
        >
          {/* Logo and links section */}

          <div className="flex  gap-4 items-center">
            <a
              href="#"
              className="text-primary 
         font-semibold   text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>

            <div className="lg:block  ">
              <ul className=" flex items-center  gap-4">
                {menuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="font-semibold hover:text-black  
                  duration-200 light:hover:text-white"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="text-black
         font-semibold   text-xl  sm:text-xl underline
         "
                  >
                    Quick Shop⬇️
                  </a>
                  {/* dropdownlink */}
                  <div
                    className="absolute z-[9999] hidden
                  group-hover:block w-[200px] rounded-md bg-white hover:bg-transparent"
                  >
                    <ul className="space-y-1 bg-antiquewhite-500 ">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a className='text-grey-500 
                          hover:text-black dark:hover:text-black 
                          duration-200 inline-block w-full p-2
                          hover:bg-primary/20 rounded-md '
                           href={data.link}>{data.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* navbar right section */}
          <div className="flex justify-between items-center  gap-4">
            {/* search bar */}
            <div className="font-semibold relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar text-white " />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            {/* order section  */}
            <button className="relative p-3">
              <div className="text-xl text-black-600 dark:text-black-400">
                <i class="fa-solid fa-bag-shopping"></i>
                <div
                  className="w-4 h-4 bg-red-500 text-white
                rounded-full absolute top-0 right-0 flex
                items-center text-xs justify-center"
                >
                  4
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
