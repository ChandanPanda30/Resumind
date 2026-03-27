import React from "react";
import { Link } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Navbar = () => {
  const { auth } = usePuterStore();
  const signOut = usePuterStore((s) => s.auth.signOut);

  return (
    <nav className="navbar">
      <Link to="/">
        <p className={"text-2xl font-bold text-gradient"}>Resumemind</p>
      </Link>

      <div className="flex gap-3">
        <Link to="/upload" className={"primary-button w-fit"}>
          Upload Your Resume
        </Link>
        {auth.isAuthenticated ? (
          <button
            type="button"
            className="primary-button w-fit"
            onClick={signOut}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/auth" className="primary-button w-fit">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
