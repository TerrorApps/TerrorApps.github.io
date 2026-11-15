import { useEffect, useState } from "react"

const QUERY = "(prefers-reduced-motion: reduce)"

const usePrefersReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState(
    () => typeof window.matchMedia === "function" && window.matchMedia(QUERY).matches
  )

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined
    const query = window.matchMedia(QUERY)
    const onChange = () => setReduced(query.matches)
    query.addListener(onChange)
    return () => query.removeListener(onChange)
  }, [])

  return reduced
}

export default usePrefersReducedMotion
