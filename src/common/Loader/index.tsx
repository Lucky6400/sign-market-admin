const Loader = ({ isSmall }: { isSmall?: boolean }) => {
  return (
    <div
      className={` ${
        isSmall ? 'flex items-center justify-center h-full w-full' : 'flex h-screen items-center justify-center bg-white'
      } `}
    >
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default Loader;
