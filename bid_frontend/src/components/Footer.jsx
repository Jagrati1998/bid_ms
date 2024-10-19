import React from 'react';

const Footer = () => {
  return (
    <footer className="w-4/5 mx-auto py-10 bg-gray-900 text-white p-10">
      {/* Top section: Logo and Nav Links */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40" // Replace with your logo
              alt="Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-semibold">Genix Auctions</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm">
          <a href="#products" className="hover:text-blue-500">
            Products
          </a>
          <a href="#about" className="hover:text-blue-500">
            About Us
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
          <a href="#auctions" className="hover:text-blue-500">
            Auctions
          </a>
          <a href="#bidding" className="hover:text-blue-500">
            Bidding
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <a href="#twitter" className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557a9.835 9.835 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482 13.93 13.93 0 0 1-10.109-5.135 4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.098A4.904 4.904 0 0 1 .965 8.886v.061a4.92 4.92 0 0 0 3.95 4.827 4.903 4.903 0 0 1-2.213.084 4.926 4.926 0 0 0 4.604 3.419 9.864 9.864 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.068A13.926 13.926 0 0 0 7.548 21c9.057 0 14.01-7.503 14.01-14.01 0-.214-.005-.427-.014-.638A10.027 10.027 0 0 0 24 4.557z" />
          </svg>
        </a>
        <a href="#facebook" className="text-gray-400 hover:text-blue-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.483v-9.294H9.845v-3.622h2.963V8.413c0-2.928 1.791-4.533 4.409-4.533 1.254 0 2.33.093 2.645.135v3.065h-1.813c-1.423 0-1.698.676-1.698 1.666v2.184h3.396l-.442 3.622h-2.954V24h5.784C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
          </svg>
        </a>
        <a href="#instagram" className="text-gray-400 hover:text-pink-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.308.975.975 1.247 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.247-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.247-2.242-1.308-3.608C2.175 15.586 2.163 15.206 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.149 2.163 8.414 2.105 8.794 2.163 12 2.163m0-2.163C8.756 0 8.333.01 7.053.07 5.77.131 4.692.348 3.758 1.283c-.933.933-1.151 2.012-1.212 3.295C2.01 5.667 2 6.09 2 12s.01 6.333.07 7.053c.061 1.284.279 2.362 1.212 3.295.933.933 2.012 1.151 3.295 1.212C8.333 23.99 8.756 24 12 24s3.667-.01 4.947-.07c1.284-.061 2.362-.279 3.295-1.212.933-.933 1.151-2.012 1.212-3.295.06-.72.07-1.143.07-7.053s-.01-6.333-.07-7.053c-.061-1.284-.279-2.362-1.212-3.295C19.362.348 18.284.131 17.001.07 15.721.01 15.244 0 12 0z" />
          </svg>
        </a>
        <a href="#github" className="text-gray-400 hover:text-gray-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.086-.743.083-.728.083-.728 1.2.084 1.833 1.235 1.833 1.235 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.223-.123-.305-.535-1.53.117-3.185 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.003-.405 1.02.006 2.047.139 3.006.405 2.29-1.553 3.295-1.23 3.295-1.23.655 1.655.244 2.88.12 3.185.77.841 1.235 1.913 1.235 3.223 0 4.61-2.805 5.624-5.475 5.92.43.371.815 1.1.815 2.217 0 1.604-.014 2.896-.014 3.293 0 .322.216.696.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2024 Genix Auctions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
