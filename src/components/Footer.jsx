const Footer = () => {
  return (
    <footer className="p-6 border-base-300 border-1 rounded-t-lg">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">© 2025 TodoList</div>
        <div className="flex space-x-4 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900">
            About
          </a>
          <a href="#" className="hover:text-gray-900">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-900">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
