import { useDispatch } from "react-redux";
import { UserSigninRequest } from "../../redux/action/UserAction";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      let payload = {
        email: values.email,
        password: values.password,
      };
      dispatch(UserSigninRequest(payload));
      router.push("/project");
    },
  });

  return (
    <>
      <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <div className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Log In</div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                id="email"
                name="email"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="email"
                required
                placeholder="Email"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="current-password"
                required
                placeholder="Password"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>
            <button type="submit" className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
              LOG IN
            </button>
            <p className="text-center text-lg">
              No account?
              <Link href="/auth/register" className="font-medium text-indigo-500 underline-offset-4 hover:underline">
                Create One
              </Link>
            </p>
          </form>

          {/* <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
            FORGOT PASSWORD?
          </a> */}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
