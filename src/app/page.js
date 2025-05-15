'use client';
import Navbar from '@/app/components/Navbar';
import Sidebar from '@/app/components/Sidebar';
import Header from '@/app/components/Header';
import ApplicationCard from '@/app/components/ApplicationCard';

const HomePage = () => {
  return (
    <div className="min-h-screen font-sans bg-[#F8F9FF]">
      <Navbar />
      <Sidebar />

      <main className="ml-64 pt-24 pb-12 px-10">
        <div className="max-w-3xl mx-auto">
          <Header />
          <ApplicationCard />
        </div>
      </main>
    </div>
  );
};

export default HomePage;