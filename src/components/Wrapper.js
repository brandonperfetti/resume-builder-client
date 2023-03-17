export function Wrapper({ children }) {
  return (
    <div className="w-full px-4 mx-auto my-8 space-y-8 sm:px-8 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      {children}
    </div>
  )
}
