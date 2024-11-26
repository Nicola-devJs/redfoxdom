import MainPage from "@/appPages/main";
import { fetchingProperties } from "@/appPages/main/model/api";

export default async function Main() {
  fetchingProperties();

  return <MainPage />;
}
