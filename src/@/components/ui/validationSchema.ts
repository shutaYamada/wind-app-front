import { z } from "zod";

export const signUpValidationShema = z.object({
  email: z
    .string()
    .min(1, "emailは必須です")
    .email("正しいアドレスを使用してください"),
  // grade: z.number().min(1, "学年は必須です"),
  password: z.string().min(1, "passwordは必須です"),
  // sailNo: z
  //   .string()
  //   .min(1, "セールナンバーは必須です")
  //   .regex(/^[A-Za-z0-9]+-[A-Za-z0-9]+$/, "ハイフンは必須です"),
});

export const NoteValidationShema = z.object({
  title: z.string({ required_error: "タイトルを入力してください" }),
  content: z.string({ required_error: "内容を入力してください" }),
  date: z.string({ required_error: "出艇日を入力してください" }),
});

export const createQuestionValidationShema = z.object({
  content: z.string({ required_error: "質問を入力してください" }),
});

export const createAnswerValidationShema = z.object({
  content: z.string({ required_error: "回答を入力してください" }),
});

export const CalendarEventValidationShema = z.object({
  title: z.string({ required_error: "タイトルを入力してください" }),
  content: z.string().optional(),
  start: z.string({ required_error: "開始日を入力してください" }),
  end: z.string({ required_error: "終了日を入力してください" }),
  is_absent: z.boolean().optional(),
});

export const DepartureValidationShema = z.object({
  date: z.string({ required_error: "日付を選択してください" }),
  start: z.string({ required_error: "開始時間を入力してください" }),
  end: z.string({ required_error: "終了時間を入力してください" }),
  intra_user_id: z.number().optional(),
  description: z.string().optional(),
});
