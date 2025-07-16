import { format, formatDistance, formatRelative, subDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  return (
    // task tamam
    <div className="p-6 bg-white rounded-[5px] leading-6 mt-4 shadow-[0_4px_5px_0_rgba(0,0,0,0.1)]">
      <h3 className="text-[18px] text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim:{" "}
        <span className="inline-block px-2 py-1 rounded-[2px]">
          {taskObj.deadline}
        </span>
      </div>
      <p className="pt-2 pb-3 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block px-3 py-1 text-sm border border-[#ccc] mr-1.5 mb-[6px] rounded-full"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          onClick={() => onComplete(taskObj.id)}
          className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgba(0,0,0,0.05)] rounded-[4px] border-0 cursor-pointer"
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
