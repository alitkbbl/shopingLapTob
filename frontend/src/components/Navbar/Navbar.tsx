import Categorization from "./Categorization";
import OtherInNavbar from "./OtherInNavbar";

export default function Navbar() {
  return (
    <div className="flex mt-3 mr-3">
        <Categorization />
        <OtherInNavbar />
    </div>
  )
}
