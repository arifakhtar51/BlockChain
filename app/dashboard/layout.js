import Sidebar from "../../componets/Sidebar"


export default function RootLayout({ children }) {
  return (
      <div className="flex ">

       {/* add the dashboard in here for journalist to create stuff  */}

          <Sidebar/>

        <div className="w-[100vw]">
           {children}
        </div>
        
      </div>
 
  );
}