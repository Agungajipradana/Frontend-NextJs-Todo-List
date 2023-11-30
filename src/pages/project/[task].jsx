import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ListTaskRequest } from "@/redux/action/TaskAction";
import { FindProjectRequest, ListProjectRequest } from "@/redux/action/ProjectAction";

const TaskPage = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [refresh, setRefresh] = useState(false);
  const { tasks } = useSelector((state) => state.taskState);
  const { projects } = useSelector((state) => state.projectState);
  const [payload, setPayload] = useState();
  // console.log(tasks);

  const taskId = query.task || "defaultTaskId";
  console.log("Task ID:", query.task);
  useEffect(() => {
    dispatch(ListProjectRequest(payload));
    dispatch(ListTaskRequest({ id: taskId }));
    dispatch(FindProjectRequest(taskId));
    setRefresh(false);
  }, [payload, dispatch, refresh, taskId]);

  const filteredProject = projects.find((project) => project.id === taskId);
  console.log("Filter :", filteredProject);

  return (
    <>
      <div>
        <h1>Task</h1>
        <p>Task ID : {query.task}</p>
      </div>

      {filteredProject && (
        <div key={filteredProject.id}>
          <h1 className="font-bold pt-4">Project Name: {filteredProject.title}</h1>
        </div>
      )}

      <div className="flex justify-between mt-4 mx-4 gap-2">
        <div className="w-[324px] h-[120px] pl-[22px] pr-[47px] py-[22px] bg-neutral-100 rounded-[17px] justify-start items-center inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
            <div className="justify-start items-start inline-flex">
              <div className="w-[115px] text-black text-base font-medium font-['Rubik'] leading-tight">Date added:</div>
              <div className="text-black text-base font-normal font-['Rubik'] leading-tight">12/04/2021</div>
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-[115px] text-black text-base font-medium font-['Rubik'] leading-tight">Deadline:</div>
              <div className="text-black text-base font-normal font-['Rubik'] leading-tight">21/04/2021</div>
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-[115px] text-black text-base font-medium font-['Rubik'] leading-tight">Participants:</div>
              <div className="text-black text-base font-normal font-['Rubik'] leading-tight">Adyl, Azhar, Arthur</div>
            </div>
          </div>
        </div>

        <div className="w-[821px] h-[120px] p-[22px] bg-neutral-100 rounded-[17px] justify-center items-center inline-flex flex-col">
          <div className="w-[777px] h-[76px] text-black text-base font-normal font-['Rubik'] leading-tight">Project A</div>
        </div>

        <div className="w-[187px] h-[120px] p-[22px] mx-4 bg-neutral-100 rounded-[17px] justify-center items-center inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
            <div className="justify-start items-start inline-flex">
              <div className="w-[115px] text-black text-base font-medium font-['Rubik'] leading-tight">All tasks:</div>
              <div className="w-7 text-right text-black text-base font-normal font-['Rubik'] leading-tight">6</div>
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-[115px] text-black text-base font-medium font-['Rubik'] leading-tight">Done:</div>
              <div className="w-7 text-right text-black text-base font-normal font-['Rubik'] leading-tight">0</div>
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-[115px] text-black text-base font-medium font-['Rubik'] leading-tight">Frozen:</div>
              <div className="w-7 text-right text-black text-base font-normal font-['Rubik'] leading-tight">1</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-4 pt-4">
        <div className="w-[327px] h-[653px] relative bg-neutral-100 rounded-[17px]">
          <p className="left-[22px] top-[22px] absolute text-black text-xl font-medium font-['Rubik'] leading-tight">To do</p>

          {tasks?.map((item, index) => (
            <div key={item.id} className="mb-4 mt-16 mx-4">
              {item.todoList !== null && (
                <div className="w-[290px] h-[105px] bg-zinc-200 rounded-[17px] relative">
                  <p>ID : {item.id}</p>
                  <p className="left-[22px] top-[15px] text-black text-base font-medium font-['Rubik'] leading-tight">{item.todoList}</p>
                  <div className="left-[22px] top-[46px] absolute flex-col justify-start items-start gap-2">
                    <div className="flex items-center">
                      <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Participant:</p>
                      <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">{item.participant}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Date added:</p>
                      <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">{item.dateAdded}</p>
                    </div>
                  </div>
                  <div className="left-[166px] top-[15px] absolute justify-start items-center gap-0.5 inline-flex">
                    <div className="px-[9px] bg-green-400 rounded-[14px] justify-center items-center flex">
                      <p className="text-white text-sm font-normal font-['Rubik'] leading-tight">Low</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-[327px] h-[653px] relative bg-neutral-100 rounded-[17px]">
          <p className="left-[22px] top-[22px] absolute text-black text-xl font-medium font-['Rubik'] leading-tight">In progress</p>

          {tasks?.map((item, index) => (
            <div key={item.id} className="mb-4 mt-16 mx-4">
              {item.todoListOnProgress !== null && (
                <div className="w-[290px] h-[105px] bg-zinc-200 rounded-[17px] relative">
                  <p>ID : {item.id}</p>
                  <p className="left-[22px] top-[15px] text-black text-base font-medium font-['Rubik'] leading-tight">{item.todoListOnProgress}</p>
                  <div className="left-[22px] top-[46px] absolute flex-col justify-start items-start gap-2">
                    <div className="flex items-center">
                      <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Participant:</p>
                      <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">{item.participant}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Date added:</p>
                      <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">{item.dateAdded}</p>
                    </div>
                  </div>
                  <div className="left-[166px] top-[15px] absolute justify-start items-center gap-0.5 inline-flex">
                    <div className="px-[9px] bg-green-400 rounded-[14px] justify-center items-center flex">
                      <p className="text-white text-sm font-normal font-['Rubik'] leading-tight">Low</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-[327px] h-[653px] relative bg-neutral-100 rounded-[17px]">
          <p className="left-[22px] top-[22px] absolute text-black text-xl font-medium font-['Rubik'] leading-tight">Done</p>

          {tasks?.map((item, index) => (
            <div key={item.id} className="mb-4 mt-16 mx-4">
              {item.todoListDone !== null && (
                <div className="w-[290px] h-[105px] bg-zinc-200 rounded-[17px] relative">
                  <p>ID : {item.id}</p>
                  <p className="left-[22px] top-[15px] text-black text-base font-medium font-['Rubik'] leading-tight">{item.todoListDone}</p>
                  <div className="left-[22px] top-[46px] absolute flex-col justify-start items-start gap-2">
                    <div className="flex items-center">
                      <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Participant:</p>
                      <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">{item.participant}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Date added:</p>
                      <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">{item.dateAdded}</p>
                    </div>
                  </div>
                  <div className="left-[166px] top-[15px] absolute justify-start items-center gap-0.5 inline-flex">
                    <div className="px-[9px] bg-green-400 rounded-[14px] justify-center items-center flex">
                      <p className="text-white text-sm font-normal font-['Rubik'] leading-tight">Low</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskPage;
