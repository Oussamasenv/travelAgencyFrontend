import { useLocation } from "react-router-dom";


export default function({children}){

const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className={`flex flex-col ${isAdminRoute ? '' : 'mt-16'}`}>
      {children}
    </div>
  );
     

}