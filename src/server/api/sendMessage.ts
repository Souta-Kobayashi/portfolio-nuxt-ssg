import type { SendMessageResponse } from "~/types"

export default defineEventHandler<Promise<SendMessageResponse>>(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const body = await readBody(event)

  if (!body.name || !body.email || !body.message) {
    return {
      success: false,
      error: "必須項目が入力されていません。",
    }
  }

  const content = `名前：${body.name}\nメールアドレス：${body.email}\nお問い合わせ内容：\n${body.message}`

  const payload = {
    text: content,
  }

  try {
    const response = await $fetch(runtimeConfig.slackWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    return { success: true, data: response }
  }
  catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, error: error.message }
    }
    else {
      return { success: false, error: "An unknown error occurred" }
    }
  }
})
