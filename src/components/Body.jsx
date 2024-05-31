import SideBar from "./SideBar";
import Travels from "./Travels";

export default function Body() {
    return (
        <>

        <div className="min-h-screen">
            <div className="w-1/4 bg-red-200 h-70">
                <SideBar />
            </div>
            <div className="w-3/4 bg-yellow-200 h-70">
                <Travels />
            </div>
        </div>
        </>
    )
}