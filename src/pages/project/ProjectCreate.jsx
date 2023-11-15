import { AddProjectRequest } from "@/redux/action/ProjectAction";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ProjectCreate = (props) => {
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);
  const [value, setValue] = useState();

  const formik = useFormik({
    initialValues: {
      title: undefined,
    },

    onSubmit: async () => {
      let payload = new FormData();
      payload.append("title", formik.values.title);
      try {
        // Dispatch action and handle success
        await dispatch(AddProjectRequest(payload));
        setIsSuccess(true);
        // Optional: Reset the form values
        formik.resetForm();

        // Close the modal after a delay (e.g., 2 seconds)
        setTimeout(() => {
          props.setDisplay(false);
        }, 1000);

        // Set refresh
        props.setRefresh(true);
      } catch (error) {
        // Handle error if needed
        console.error(error);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Add Project Name</h1>

                <div className="mb-4">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>

                <div className="flex items-center justify-start w-full">
                  <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                    Submit
                  </button>
                  <button
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                    onClick={() => props.setDisplay(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {isSuccess && (
        <div className="fixed top-2 right-0 left-0 bg-blue-500 text-white px-4 py-2 text-center alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Data Successfully Insert</span>
        </div>
      )}
    </>
  );
};

export default ProjectCreate;
