import React, { useState } from 'react';

const NavbarMain = () => {
  const userAuth = false; // Cambia a true si el usuario está autenticado
  const user = {
    name: "Brandon Vazquez",
    email: "bvazquezj@gmail.com",
    image: "https://unavatar.io/github/bvazquezj",
  };

  // Estado para controlar la visibilidad del menú
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Función para cerrar el menú si se hace clic fuera de él
  const handleClickOutside = (event) => {
    if (event.target.closest('#profile-image') || event.target.closest('#user-menu')) {
      return;
    }
    setIsMenuVisible(false);
  };

  // Usamos useEffect para agregar el evento de clic cuando el componente se monta
  React.useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-semibold hover:text-lime-600">
          <img src="/logo.png" alt="Logo OnlyChefs" width="100" height="100" />
        </a>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            <a href="/curses" className="text-gray-700 hover:text-lime-600">Cursos</a>
            <a href="/recipes" className="text-gray-700 hover:text-lime-600">Recetas</a>
            <a href="/learning" className="text-gray-700 hover:text-lime-600">Mi aprendizaje</a>
            <a href="/community" className="text-gray-700 hover:text-lime-600">Comunidad</a>
          </nav>

          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-gray-50">
            {/* Icono SVG para la búsqueda */}
            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 5a7 7 0 100 14 7 7 0 000-14z" />
            </svg>
            <input type="text" placeholder="Buscar cursos o recetas" className="outline-none bg-transparent pl-2 text-gray-700" />
          </div>

          {userAuth ? (
            <>
              <a href="/login" className="text-gray-700 hover:text-lime-600">Iniciar Sesión</a>
              <a href="/register" className="text-gray-700 hover:text-lime-600">Registrarse</a>
            </>
          ) : (
            <div className="relative">
              <img
                id="profile-image"
                src={user.image}
                alt="Logo OnlyChefs"
                width="40"
                height="40"
                className="rounded-full cursor-pointer hover:scale-110 transition-all"
                onClick={toggleMenu}
              />

              {/* Menú Contextual */}
              {isMenuVisible && (
                <div id="user-menu" className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  <a href="/Profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Perfil</a>
                  <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Configuración</a>
                  <a href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cerrar Sesión</a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavbarMain;
