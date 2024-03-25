import { Suspense } from "react";
import UsersList from "./(users)/users-list";

export default async function Home() {

  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="text-4xl font-bold text-gray-400 tracking-wide">Welcome to <span className="underline decoration-cyan-500 decoration-wavy underline-offset-4 decoration-2">Home page</span></h1>
      <Suspense fallback={<p>Loading users...</p>}>
        <UsersList />
      </Suspense>
    </div>
  );
}
