import Community from "./components/Community";
import Reason from "./components/Reason";
import Subscription from "./components/Subscription";

export default function App() {
  return (
<main className="font-Karla min-h-screen p-6 flex justify-center items-center bg-gray">
  <section className="rounded-lg overflow-hidden max-w-3xl mx-auto grid grid-cols-1 grid-rows-[auto_auto_auto] lg:grid-cols-2 lg:grid-rows-2">
    <Community/>
    <Subscription/>
    <Reason/>

  </section>
</main>
  )
}