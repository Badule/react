import { Navigate, useNavigate, Outlet, NavLink } from "react-router-dom";

export function AboutPage() {
  const status = 200;

  const navigate = useNavigate();

  if (status === 404) {
    return <Navigate to="not-found" />;
  }

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-6xl mb-4">This is About page</h1>
      <p className="text-2xl font-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
        exercitationem consectetur dignissimos libero soluta repudiandae!
      </p>
    </div>
  );
}
