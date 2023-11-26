import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ListTaskRequest } from "@/redux/action/TaskAction";

const TaskPage = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [refresh, setRefresh] = useState(false);
  const { tasks } = useSelector((state) => state.taskState);
  // console.log(tasks);

  useEffect(() => {
    dispatch(ListTaskRequest());
    setRefresh(false);
  }, [dispatch, refresh]);

  return (
    <>
      <div>
        <h1>Task</h1>
        <p>Task ID : {query.task}</p>
      </div>

      <div>
        <h1 className="font-bold pt-4">Project Name</h1>
      </div>

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
          <div className="w-[290px] h-[105px] left-[19px] top-[77px] absolute bg-zinc-200 rounded-[17px]">
            <p className="left-[22px] top-[15px] absolute text-black text-base font-medium font-['Rubik'] leading-tight">CRM system design</p>
            <div className="left-[22px] top-[46px] absolute flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Participant:</p>
                <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">Azhar</p>
              </div>
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Date added:</p>
                <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">12/04/2021</p>
              </div>
            </div>
            <div className="left-[182px] top-[15px] absolute justify-start items-center gap-0.5 inline-flex">
              <div className="px-[9px] bg-orange-400 rounded-[14px] justify-start items-start gap-2.5 flex">
                <p className="text-white text-sm font-normal font-['Rubik'] leading-tight">Medium</p>
              </div>
            </div>
          </div>
          <div className="w-[290px] h-[105px] left-[19px] top-[197px] absolute bg-zinc-200 rounded-[17px]">
            <p className="left-[22px] top-[15px] absolute text-black text-base font-medium font-['Rubik'] leading-tight">Statistics</p>
            <div className="left-[22px] top-[46px] absolute flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Participant:</p>
                <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">Artur</p>
              </div>
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Date added:</p>
                <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">12/04/2021</p>
              </div>
            </div>
            <div className="left-[107px] top-[15px] absolute justify-start items-center gap-0.5 inline-flex">
              <div className="px-[9px] bg-green-400 rounded-[14px] justify-center items-center flex">
                <p className="text-white text-sm font-normal font-['Rubik'] leading-tight">Low</p>
              </div>
            </div>
          </div>
          <div className="w-[290px] h-[105px] left-[19px] top-[318px] absolute bg-zinc-200 rounded-[17px]">
            <p className="left-[22px] top-[15px] absolute text-black text-base font-medium font-['Rubik'] leading-tight">Priorities</p>
            <div className="left-[22px] top-[46px] absolute flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Participant:</p>
                <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">Adyl, Artur</p>
              </div>
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Date added:</p>
                <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">12/04/2021</p>
              </div>
            </div>
            <div className="left-[103px] top-[15px] absolute justify-start items-center gap-0.5 inline-flex">
              <div className="px-[9px] bg-red-500 rounded-[14px] justify-start items-start gap-2.5 flex">
                <p className="text-white text-sm font-normal font-['Rubik'] leading-tight">High</p>
              </div>
            </div>
          </div>
          <div className="w-6 h-6 left-[285px] top-[20px] absolute" />
        </div>

        <div className="w-[327px] h-[653px] relative bg-neutral-100 rounded-[17px]">
          <p className="left-[22px] top-[22px] absolute text-black text-xl font-medium font-['Rubik'] leading-tight">In progress</p>
          <div className="w-[290px] h-[105px] left-[19px] top-[77px] absolute bg-zinc-200 rounded-[17px]">
            <p className="left-[22px] top-[15px] absolute text-black text-base font-medium font-['Rubik'] leading-tight">Notifications</p>
            <div className="left-[22px] top-[46px] absolute flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Participant:</p>
                <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">Artur</p>
              </div>
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Date added:</p>
                <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">12/04/2021</p>
              </div>
            </div>
            <div className="left-[132px] top-[15px] absolute justify-start items-center gap-0.5 inline-flex">
              <div className="px-[9px] bg-green-400 rounded-[14px] justify-center items-center flex">
                <p className="text-white text-sm font-normal font-['Rubik'] leading-tight">Low</p>
              </div>
            </div>
          </div>
          <div className="w-[290px] h-[105px] left-[19px] top-[198px] absolute bg-zinc-200 rounded-[17px]">
            <p className="left-[22px] top-[15px] absolute text-black text-base font-medium font-['Rubik'] leading-tight">Task types</p>
            <div className="left-[22px] top-[46px] absolute flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Participant:</p>
                <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">Adyl</p>
              </div>
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Date added:</p>
                <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">12/04/2021</p>
              </div>
            </div>
            <div className="left-[114px] top-[15px] absolute justify-start items-center gap-0.5 inline-flex">
              <div className="px-[9px] bg-green-400 rounded-[14px] justify-center items-center flex">
                <p className="text-white text-sm font-normal font-['Rubik'] leading-tight">Low</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[327px] h-[653px] relative bg-neutral-100 rounded-[17px]">
          <p className="left-[22px] top-[22px] absolute text-black text-xl font-medium font-['Rubik'] leading-tight">Done</p>
          <div className="w-[290px] h-[105px] left-[19px] top-[77px] absolute bg-zinc-200 rounded-[17px]">
            <p className="left-[22px] top-[15px] absolute text-black text-base font-medium font-['Rubik'] leading-tight">Todoshnik design</p>
            <div className="left-[22px] top-[46px] absolute flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Participant:</p>
                <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">Azhar</p>
              </div>
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="w-[86px] text-neutral-500 text-sm font-medium font-['Rubik'] leading-tight">Date added:</p>
                <p className="text-black text-sm font-normal font-['Rubik'] leading-tight">12/04/2021</p>
              </div>
            </div>
            <div className="left-[166px] top-[15px] absolute justify-start items-center gap-0.5 inline-flex">
              <div className="px-[9px] bg-green-400 rounded-[14px] justify-center items-center flex">
                <p className="text-white text-sm font-normal font-['Rubik'] leading-tight">Low</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskPage;
