import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Form, FormProps } from "./Form";

import { FormField } from "../FormField/FormField";

const meta: Meta<typeof Form> = {
  title: "uiParts/Form", // Storybookのサイドバーでの表示名と階層
  component: Form,
  tags: ["autodocs"], // ドキュメントを自動生成
  argTypes: {
    onSubmit: {
      action: "form submitted",
      description: "フォーム送信時のイベントハンドラ",
    },
    children: { control: false },
  },
  args: {
    onSubmit: action("form submitted"),
  },
};

export default meta;

type Story = StoryObj<FormProps>;

// サンプルフォームのStory
export const Default: Story = {
  render: (
    args // <-- ここは => ( で開始します
  ) => (
    <Form {...args}>
      <FormField
        label="ユーザー名"
        inputId="username"
        inputProps={{
          type: "text",
          placeholder: "ユーザー名を入力してください",
        }}
      />
      <FormField
        label="パスワード"
        inputId="password"
        inputProps={{
          type: "password",
          placeholder: "パスワードを入力してください",
        }}
      />
      <FormField
        label="期日"
        inputId="due-date"
        inputProps={{
          type: "date" as const,
        }}
      />
    </Form>
  ),
  parameters: {
    layout: "centered",
  },
};
// エラーメッセージ付きフォームの例
export const WithErrors: Story = {
  render: (args) => (
    <Form {...args}>
      <FormField
        label="ユーザー名"
        inputId="username-error"
        inputProps={{
          type: "text",
          value: "error_user",
          error: true,
        }}
        errorMessage="ユーザー名が無効です"
      />
      <FormField
        label="パスワード"
        inputId="password-error"
        inputProps={{
          type: "password",
          value: "wrong_password",
          error: true,
        }}
        errorMessage="パスワードが正しくありません"
      />
      <FormField
        label="開始日"
        inputId="start-date-error"
        inputProps={{
          type: "date" as const,
          value: "invalid-date",
          error: true,
        }}
        errorMessage="開始日を入力してください"
      />
    </Form>
  ),
  parameters: {
    layout: "centered",
  },
};
