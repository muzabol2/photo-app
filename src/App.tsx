import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";
import {usePhotos} from "./components/usePhotos.hook";

function App() {
    const {photos, handlePhotoAdd} = usePhotos();

    return (
        <div className="w-full h-full bg-slate-200 flex flex-col">
            <Header/>
            <Main photos={photos}/>
            <Footer handlePhotoAdd={handlePhotoAdd}/>
        </div>
    );
}

export default App;
