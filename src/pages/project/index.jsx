import { UserSignoutRequest } from "@/redux/action/UserAction";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "cookies-next";

const Project = () => {
  const dispatch = useDispatch();
  const { UserProfile } = useSelector((state) => state.userState);
  const router = useRouter();

  const logout = () => {
    dispatch(UserSignoutRequest());
    router.reload();
  };

  useEffect(() => {
    const token = getCookie("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <>
      <div>
        <button onClick={logout} className="bg-black text-white rounded-full py-1 px-1">
          Logout
        </button>
      </div>
    </>
  );
};

export default Project;
