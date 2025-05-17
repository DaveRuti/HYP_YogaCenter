/* Permette di portare sempre in alto la pagina quando si clicca su un link */

export default defineNuxtPlugin(() => {
    const router = useRouter()

    router.afterEach(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
})
