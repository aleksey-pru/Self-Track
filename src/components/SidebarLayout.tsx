import { PanelLeft, X } from 'lucide-react';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export interface SidebarLayoutProps {}

const SidebarLayout = ({}: SidebarLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="flex flex-col">
      <header className="p-6 pb-0 sm:fixed">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="p-1 sm:hidden top-4 left-4 z-50  text-white rounded-lg"
          >
            <PanelLeft color="#000000" />
          </button>
          <h1 className="text-xl font-bold bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
            Self-track
          </h1>
        </div>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-64  bg-white shadow-lg transform transition-transform duration-300 z-100
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 sm:hidden absolute top-4 right-4 text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-600">GoalFlow</h2>
          <p className="text-sm text-gray-500">Achievement Tracker</p>
        </div>

        <nav className="px-6 space-y-4">
          <Link
            to="/"
            className={`block ${location.pathname === '/' ? 'text-purple-600 font-medium' : ''}`}
          >
            Dashboard
          </Link>
          <Link
            to="/goals"
            className={`block ${
              location.pathname === '/goals' ? 'text-purple-600 font-medium' : ''
            }`}
          >
            My Goals
          </Link>
          <Link
            to="/create"
            className={`block ${
              location.pathname === '/create' ? 'text-purple-600 font-medium' : ''
            }`}
          >
            Create Goal
          </Link>
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <main className="flex-1 p-6 sm:ml-64 sm:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
