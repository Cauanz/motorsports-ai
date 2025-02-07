import { Link } from "react-router";

export default function Header() {

const categories = [
  { name: "F1", href: "/f1", color: "red" },
  { name: "WEC", href: "/wec", color: "blue" },
  { name: "IMSA", href: "/imsa", color: "#221e1f" },
]

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4">
        <ul className="flex items-center justify-between h-16">
          <li>
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Motorsports AI
            </Link>
          </li>
          <li className="flex items-center h-full">
            <ul className="flex space-x-4 h-full">
              {categories.map((category) => (
                <li key={category.name} style={{ backgroundColor: category.color, display: "flex", flex: "1", alignContent: "center" , height: "100%", margin: "0", padding: "0" }}>
                  <Link href={category.href} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 px-4 h-full text-white ">
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
