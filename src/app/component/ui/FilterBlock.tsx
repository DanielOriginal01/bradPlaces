import { XMarkIcon } from "@heroicons/react/24/outline";



export default function FilterBlock({ icon, title, onClear }) {
  return (
    <div className="bg-gray-100 rounded-full px-4 py-2 w-full flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-semibold text-[14px]">{title}</span>
      </div>
      <button onClick={onClear}>
        <XMarkIcon className="w-4 h-4 text-gray-400" />
      </button>
    </div>
  );
}