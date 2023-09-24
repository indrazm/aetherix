
import { Header } from "@/components/Header";
import { EventCard } from "@/components/EventCard";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="max-w-screen-xl flex flex-col mx-auto px-4 py-8">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto mb-8">
          <h1 className="text-3xl font-bold">All Events</h1>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Add New Event</button>
        </div>

        <EventCard />
      </div>
    </main>
  );
 }
