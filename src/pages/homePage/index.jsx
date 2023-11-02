import Image from "next/image";
import { useRouter } from "next/router";
import todoImage from "@/assets/images/homePage/todo.png";
import todoListImage from "@/assets/images/homePage/ToDoList.png";

const HomePage = () => {
  const router = useRouter();
  const onLogin = () => {
    router.push("/auth/login");
  };
  return (
    <>
      <div className="min-h-screen bg-[#202024] text-white flex justify-center items-center ">
        <div className="text-center">
          <Image src={todoListImage} alt={{}} priority />
          <button className="rounded-full bg-[#8D8D99] py-1 px-2 w-20 text-xl mt-5" onClick={onLogin}>
            Login
          </button>
        </div>
        <div className="text-center">
          <Image src={todoImage} alt={{}} priority />
        </div>
      </div>
    </>
  );
};

export default HomePage;
