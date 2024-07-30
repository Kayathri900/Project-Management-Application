export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2  text-xs md:text-base rounded-md bg-purple-700 text-white hover:bg-cyan-200 hover:text-slate-700"
      {...props}
    >
      {children}
    </button>
  );
}
