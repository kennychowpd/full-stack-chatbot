import {z} from "zod"

// object validator
export const MessageSchema = z.object({
  id:z.string(),
  isUserMessage: z.boolean(),
  text: z.string(),
})

// array validator
export const MessageArraySchema = z.array(MessageSchema)

export type Message = z.infer<typeof MessageSchema>