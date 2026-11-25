type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

interface SubmitMessages {
  offline: string
  success: string
  error?: string
}

export function useFormSubmit() {
  const status = ref<FormStatus>('idle')
  const notice = ref('')
  const config = useRuntimeConfig()

  async function submit(path: string, body: Record<string, unknown>, messages: SubmitMessages) {
    // Set NUXT_PUBLIC_API_BASE to the Django backend when it is ready.
    if (!config.public.apiBase) {
      notice.value = messages.offline
      return
    }

    status.value = 'sending'
    notice.value = ''
    try {
      await $fetch(`${config.public.apiBase}${path}`, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' },
      })
      status.value = 'sent'
      notice.value = messages.success
    } catch {
      status.value = 'error'
      notice.value = messages.error ?? 'That did not go through. Please try again or use WhatsApp.'
    }
  }

  return { status, notice, submit }
}
