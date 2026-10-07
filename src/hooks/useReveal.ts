import { useEffect, type RefObject, type DependencyList } from 'react'

// Adds `is-visible` to every `.reveal` descendant of `ref` as it scrolls into view.
// Pass `deps` when the set of `.reveal` children can change (e.g. filtered lists).
export function useReveal(ref: RefObject<HTMLElement>, deps: DependencyList = []) {
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    root.querySelectorAll('.reveal:not(.is-visible)').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, deps)
}
