import { AddProjectRequest } from "@/redux/action/ProjectAction";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ProjectCreate = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const formik = useFormik({
    initialValues: {
      title: undefined,
    },

    onSubmit: async () => {
      let payload = new FormData();
      payload.append("title", values.title), dispatch(AddProjectRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  //   const handleChange = (e) => {
  //     setValue(e.target.value);
  //   };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-grey-500">
          <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
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
    </>
  );
};

export default ProjectCreate;
