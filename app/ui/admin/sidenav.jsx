import NavLinks from './nav-links';
import TopLinks from './top-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-custom-blue1">

        <div className="flex mb-2 items-center text-center justify-center hidden md:block">
            <div className="w-1/2 h-40 ml-16 mb-5 border-4 border-orange-500 rounded-full overflow-hidden">
                <img src="ruta/de/la/imagen.jpg" alt="" className="w-full h-auto"></img>
            </div>
        </div>

        <div className="flex grow flex-row px-3 py-3 space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <NavLinks />
            <TopLinks />
            <div className="flex h-auto w-full grow rounded-md hidden md:block"></div>
        </div>
    </div>
  );
}
