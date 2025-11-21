const SpinnerLoading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <svg className="spinner" viewBox="25 25 50 50">
        <circle
          className="spinner-path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default SpinnerLoading;
