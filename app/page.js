import Content from "../components/homePage/Content";
import SideBar from "../components/homePage/SideBar";

export const metadata = {
  title: "Home : ORRIC HOME",
};
export default function page() {
  return (
    <>
      <SideBar />
      <Content />
    </>
  );
}
