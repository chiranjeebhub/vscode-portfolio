import React, { useEffect } from "react";
import { X, Menu } from "lucide-react";

const TopBar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  theme,
  activeMenu,
  setActiveMenu,
  menuRef,
}) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSidebarOpen]);

  return (
    <div
      className={`flex items-center justify-between p-2 ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-gray-100 border-gray-300"
      } border-b`}
    >
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`p-1 ${
            theme === "dark"
              ? "text-gray-400 hover:text-white"
              : "text-gray-600 hover:text-black"
          } focus:outline-none`}
        >
          {isSidebarOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
        {["File", "Edit", "View", "Go", "Run", "Terminal", "Help"].map(
          (menu) => (
            <div key={menu} className="relative group" ref={menuRef}>
              <span
                className={`text-sm cursor-pointer ${
                  activeMenu === menu
                    ? theme === "dark"
                      ? "text-white font-semibold"
                      : "text-black font-semibold"
                    : ""
                }`}
                onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}
              >
                {menu}
              </span>
              {activeMenu === menu && (
                <div
                  className={`absolute left-0 mt-3 w-48  shadow-lg ${
                    theme === "dark" ? "bg-gray-700" : "bg-white"
                  } ring-1 ring-black ring-opacity-5 z-10`}
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        theme === "dark"
                          ? "text-gray-300 hover:bg-gray-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      role="menuitem"
                    >
                      Menu Item 1
                    </a>
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        theme === "dark"
                          ? "text-gray-300 hover:bg-gray-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      role="menuitem"
                    >
                      Menu Item 2
                    </a>
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TopBar;
