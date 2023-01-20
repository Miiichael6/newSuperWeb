import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="min-h-screen">
      <Link to="/home" className="bg-slate-900 text-white py-1 px-2 rounded-md">
        Home
      </Link>
    </div>
  );
};

export default Profile;
