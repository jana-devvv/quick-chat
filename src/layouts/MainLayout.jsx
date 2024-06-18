import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import BottomNavigationBar from "../components/BottomNavigationBar";

function MainLayout() {
  return (
    <section className="min-h-full">
      <div className="hidden lg:flex lg:w-60 lg:flex-col lg:fixed lg:inset-y-0">
        <Sidebar />
      </div>
      <div className="lg:pl-[7rem]  h-full flex flex-col flex-1">
        <main className="flex flex-col">
          <div className="px-2 sm:px-8 pt-4 py-32 h-screen ">
            <Outlet />
          </div>
        </main>
      </div>
      <div className="hidden pl-[8rem] lg:flex lg:w-full lg:flex-col lg:fixed lg:-bottom-2 p-2 z-30">
        <BottomNavigationBar />
      </div>
    </section>
  );
}

export default MainLayout;
