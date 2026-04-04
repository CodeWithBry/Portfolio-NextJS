import { context } from "@/app/page"
import { ContextValues } from "@/types/ContextValues"
import { useContext } from "react"

function ScrollUp() {
  const {themePreference} = useContext(context) as ContextValues;

  return (
    <div className={`${themePreference == "light" ? "bg-transparent" : "bg-bg-dark"} flex justify-center py-10 pt-15 align-middle w-full`}>
        <span className={`text-gray-400 font-bold animate-bounce text-m`}>SCROLL DOWN</span>
    </div>
  )
}

export default ScrollUp