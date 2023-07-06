const Loading = () => {
  return (
    <div className="flex gap-2.5 absolute inset-0 justify-center items-center">
      <div className="flex gap-2.5">
        <span className="h-5 w-5 rounded-full bg-black shadow-lg shadow-slate-600 animate-scale animation-delay-100"></span>
        <span className="h-5 w-5 rounded-full bg-black shadow-lg shadow-slate-600 animate-scale animation-delay-200"></span>
        <span className="h-5 w-5 rounded-full bg-black shadow-lg shadow-slate-600 animate-scale animation-delay-300"></span>
      </div>
    </div>
  );
};

export default Loading;
