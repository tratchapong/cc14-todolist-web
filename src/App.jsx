import useAuth from "./hooks/useAuth";
import Router from "./routes/Router";

function App() {
  const { loading } = useAuth();
  if (loading)
    return (
      <div className="mx-auto mt-28 w-56 bg-violet-400">
        <progress className="progress w-3/4 "></progress>
      </div>
    );
  return (
    <div className="max-w-[1280px] mx-auto">
      <Router />
    </div>
  );
}

export default App;
