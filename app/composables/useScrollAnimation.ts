export function useScrollAnimation(
  delay: number = 0, 
  direction: 'up' | 'left' | 'right' = 'up'
) {
  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  const initialClass = {
    up: 'opacity-0 translate-y-8',
    left: 'opacity-0 -translate-x-8',
    right: 'opacity-0 translate-x-8'
  }[direction]

  const visibleClass = 'opacity-100 translate-x-0 translate-y-0'
  const transitionDelay = computed(() => isVisible.value ? `${delay}ms` : '0ms')

  onMounted(() => {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]

          if (entry?.isIntersecting) {
            isVisible.value = true
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      if (elementRef.value) observer.observe(elementRef.value)
    }, delay)
  })

  const replay = async () => {
    isVisible.value = false

    await nextTick()

    setTimeout(() => {
      isVisible.value = true
    }, 50)
  }

  return { 
    elementRef, 
    isVisible, 
    initialClass, 
    visibleClass, 
    transitionDelay, 
    replay
  }
}