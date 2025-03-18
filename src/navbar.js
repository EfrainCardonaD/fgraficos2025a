import {delay, throttle} from 'lodash'
import { ref, onMounted, onBeforeUnmount } from 'vue'


export function useStickyNavbar(threshold, throttleDelay) {
    const lastScrollY = ref(0)
    const isVisible = ref(true)

    function handleScroll() {
        const currentScrollY = window.scrollY
        // Si se baja y se supera el umbral, ocultamos la navbar
        if (currentScrollY > lastScrollY.value && currentScrollY > threshold) {
            delay(() => isVisible.value = false, 200)
        }
        // Si se sube, mostramos la navbar
        else if (currentScrollY < lastScrollY.value) {
            delay(() => isVisible.value = true, 700)
        }
        lastScrollY.value = currentScrollY
    }

    // Limitar la ejecución con throttle
    const throttledScroll = throttle(handleScroll, throttleDelay)

    onMounted(() => {
        window.addEventListener('scroll', throttledScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', throttledScroll)
    })

    return { isVisible }




}
