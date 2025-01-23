import SuperHeroForm from "@/app/components/SuperHeroForm";

export default async function Page() {
  return (
    <div className="w-full h-full p-6">
      <h2 className="text-gray-800 mt-4 font-medium text-2xl">Super-hero Register</h2>
      <SuperHeroForm />
    </div>
  );
}