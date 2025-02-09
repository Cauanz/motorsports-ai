import { useEffect, useState } from "react"
import Header from "../components/Header"
import { Link, useParams } from "react-router";
import SubCategoryNav from "../components/SubCategoryNav";

export default function CategoryPage() {

  const urlParams = useParams();

  const [subcategory, setSubcategory] = useState([]);

  useEffect(() => {
    switch (urlParams.category) {
    case "wec":
      setSubcategory([
        { name: "HyperCar", href: "/wec/hypercar", color: "#00459e" },
        { name: "LMGT3", href: "/wec/lmgt3", color: "#ed6e07" },
      ])
      break
      case "imsa":
      setSubcategory([
        { name: "GTP", href: "/imsa/gtp", color: "red" },
        { name: "LMP2", href: "/imsa/lmp2", color: "blue" },
        { name: "GTD Pro", href: "/imsa/gtdpro", color: "#222e1f" },
        { name: "GTD", href: "/imsa/gtd", color: "#221e1f" },
      ])
      break
    default:
      setSubcategory([
        { name: "HyperCar", href: "/wec/hypercar", color: "#00459e" },
        { name: "LMGT3", href: "/wec/lmgt3", color: "#ed6e07" },
      ])
    }
  }, [urlParams.category])

  // useEffect(() => {
  //   if (subcategoryParam) {
  //     setContent(`Conteúdo da subcategoria: ${subcategoryParam}`);
  //   } else {
  //     setContent(`Conteúdo da categoria: ${category}`);
  //   }
  // }, [category, subcategoryParam]);

  return (
    <>
    <SubCategoryNav subcategories={subcategory} />

    <div>CategoryPage</div>

    {/* // TER SUBCATEGORIAS AQUI */}
    </>
  )
}
