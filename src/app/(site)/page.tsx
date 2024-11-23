import MainPage from "@/appPages/main";

export default async function Main() {
  const response = await fetch(`${process.env.AUTH_URL}/api/properties`);
  const data = await response.json();

  console.log(data);

  return <MainPage />;
}
