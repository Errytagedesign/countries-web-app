

export const Container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      stagerChildren: 0.2,
    }
  }
}

export const BaseUrl = "https://restcountries.com/v3.1/all"