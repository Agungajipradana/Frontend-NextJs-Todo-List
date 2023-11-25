import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditProjectRequest, FindProjectRequest } from "@/redux/action/ProjectAction";

export default function ProjectUpdate(props) {
  const dispatch = useDispatch();
  const { loading, project } = useSelector((state) => state.projectState);
  // console.log("Project in Redux store:", project);

  useEffect(() => {
    dispatch(FindProjectRequest(props.id));
  }, [dispatch, props.id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      title: project?.title || "",
    },

    onSubmit: async (values) => {
      const payload = {
        id: values.id,
        title: values.title,
      };

      dispatch(EditProjectRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Updated");
      props.setRefresh(true);
    },
  });

  console.log(props.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
          <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Edit Project</h1>

              <div className="mb-4">
                <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Project ID
                </label>
                <input
                  placeholder={props.id}
                  type="text"
                  name="id"
                  id="id"
                  value={formik.values.id}
                  onChange={formik.handleChange}
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  disabled
                />
              </div>

              <div className="mb-4">
                <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Project Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
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
      </form>
    </>
  );
}
