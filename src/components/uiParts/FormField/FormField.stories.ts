import type { Meta, StoryObj } from "@storybook/react";

import { FormField, FormFieldProps } from "./FormField"; // コンポーネントとProps型をインポート
// InputProps のインポートパスが変更されます

// Storybookでのコンポーネントメタデータ定義
// タイトルに uiParts/ が追加されます
const meta: Meta<typeof FormField> = {
  title: "uiParts/FormField", // Storybookのサイドバーでの表示名と階層
  component: FormField, // 対象となるコンポーネント
  tags: ["autodocs"], // ドキュメントを自動生成
  argTypes: {
    label: {
      control: "text",
      description: "ラベルのテキスト",
    },
    inputId: {
      control: "text",
      description: "入力フィールドのID (LabelとInputを紐付け)",
    },
    inputProps: {
      control: "object",
      description: "Input コンポーネントに渡すProps (id以外)",
    },
    errorMessage: {
      control: "text",
      description: "エラーメッセージ（表示する場合）",
    },
    labelProps: {
      control: "object",
      description: "Label コンポーネントに渡すProps (htmlFor, children以外)",
    },
  },
  args: {
    label: "入力項目ラベル",
    inputId: "sample-input-id",
    inputProps: {
      placeholder: "ここに入力",
    },
    errorMessage: undefined,
    labelProps: {},
  },
};

export default meta;

// Story定義（変更なし）
type Story = StoryObj<FormFieldProps>;

export const Default: Story = {
  args: {
    // デフォルト設定でOK
  },
};

export const WithPlaceholder: Story = {
  args: {
    inputProps: {
      placeholder: "ユーザー名を入力",
    },
  },
};

export const WithError: Story = {
  args: {
    errorMessage: "入力内容に誤りがあります",
    inputProps: {
      error: true,
    },
  },
};

export const WithDifferentSize: Story = {
  args: {
    label: "小さい入力",
    inputProps: {
      placeholder: "小さいサイズ",
    },
    labelProps: {
      size: "small",
    },
  },
};
