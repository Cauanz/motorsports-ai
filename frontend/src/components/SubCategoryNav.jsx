import { Link } from "react-router";

export default function SubCategoryNav({ subcategories }) {
  return (
    <nav className=" bg-blue-500 w-full px-4">
      <ul className="flex items-center justify-between h-16">
        <li className="flex items-center h-full">
          <ul className="flex space-x-4 h-full">
            {subcategories.map((subcategory) => (
              <li key={subcategory.name} style={{ backgroundColor: subcategory.color, display: "flex", flex: "1", alignContent: "center" , height: "100%", margin: "0", padding: "0" }}>
                <Link to={subcategory.href}  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 px-4 h-full text-white ">
                  <span>{subcategory.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}