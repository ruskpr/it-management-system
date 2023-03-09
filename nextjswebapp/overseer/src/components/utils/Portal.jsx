import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Portal= ({ id, children }) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])

   return mounted
      ? createPortal(children, 
        document.querySelector(id))
      : null
}

export default Portal