const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
  const target = document.querySelector(qSelector)
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    target.innerText = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

const observer = new IntersectionObserver((entry) => {
  if (entry[0].isIntersecting) {
    counterAnim('#count1', 0, 450, 3000)
    counterAnim('#count2', 0, 35, 3000)
    counterAnim('#count3', 0, 1200, 3000)
    counterAnim('#count4', 0, 70, 3000)
  }
})

observer.observe(document.querySelector('.counter'))
