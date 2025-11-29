import logo from "../assets/Logo.png"; // ← import your logo

function Header() {
  return (
    <header className="bg-primary text-white py-3 w-100">
      <div className="container d-flex align-items-center justify-content-center">
        {/* Logo */}
        <img
          src={logo} // ← use imported logo
          alt="Parapharmacy Plus Logo"
          style={{ height: "50px" }}
          className="me-3"
        />
      </div>
    </header>
  );
}

export default Header;
