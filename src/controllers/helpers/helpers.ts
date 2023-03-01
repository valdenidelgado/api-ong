import { HttpResponse, HttpStatusCode } from "@/controllers/helpers/protocols"

export const created = <T>(body: any): HttpResponse<T> => ({
  statusCode: HttpStatusCode.CREATED,
  body,
})

export const ok = <T>(body: any): HttpResponse<T> => ({
  statusCode: HttpStatusCode.OK,
  body,
})

export const badRequest = (message: string): HttpResponse<string> => ({
  statusCode: HttpStatusCode.BAD_REQUEST,
  body: message,
})

export const serverError = (): HttpResponse<string> => ({
  statusCode: HttpStatusCode.SERVER_ERROR,
  body: "Internal Server Error",
})

export const noContent = (): HttpResponse<string> => ({
  statusCode: HttpStatusCode.NO_CONTENT,
  body: "No content",
})
