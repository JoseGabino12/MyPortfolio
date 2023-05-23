const useAnimation = () => {
  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100')
        entry.target.classList.add('blur-none')
        entry.target.classList.add('translate-x-0')
      } else {
        entry.target.classList.remove('opacity-100')
        entry.target.classList.remove('blur-none')
        entry.target.classList.remove('translate-x-0')
      }
    })
  })

  console.log(observer)

  return observer
}

export default useAnimation
