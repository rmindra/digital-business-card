import Footer from "./components/Footer";
import Info from "./components/Info";
import Main from "./components/Main";

function App() {
  return (
    <div className="max-w-[500px] mx-auto rounded-xl bg-gray-900 text-white font-sans my-8">
      <Info />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
