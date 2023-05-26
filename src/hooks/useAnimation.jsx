const useAnimation = () => {
  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100')
        entry.target.classList.add('blur-none')
      } else {
        entry.target.classList.remove('opacity-100')
        entry.target.classList.remove('blur-none')
      }
    })
  })

  return observer
}

export default useAnimation
