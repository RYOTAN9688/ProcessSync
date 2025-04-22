import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions"; // イベントログ用

import { Input, InputProps } from "./Input"; // コンポーネントとProps型をインポート

// Storybookでのコンポーネントメタデータ定義
const meta: Meta<typeof Input> = {
  title: "Atoms/Input", // Storybookのサイドバーでの表示名と階層
  component: Input, // 対象となるコンポーネント
  tags: ["autodocs"], // ドキュメントを自動生成
  argTypes: {
    // Propsに対応するコントロール設定
    placeholder: {
      control: "text",
      description: "プレースホルダーテキスト",
    },
    value: {
      control: "text",
      description: "入力フィールドの初期値",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Inputのサイズ",
    },
    disabled: {
      control: "boolean",
      description: "入力フィールドを無効化するか",
    },
    error: {
      control: "boolean",
      description: "エラー状態か",
    },
    onChange: {
      action: "changed", // 'changed'という名前でActionログに出力
      description: "入力値変更時のイベントハンドラ",
    },
    // 標準HTML属性の一部もArgsで制御可能
    type: {
      control: "select",
      options: ["text", "password", "number", "email", "date"], // 一般的なtype属性
      description: "入力フィールドのタイプ",
    },
    id: { control: "text", description: "入力フィールドのID" }, // ラベルとの関連付けに必要になることも
    name: { control: "text", description: "入力フィールドの名前 (フォーム用)" },
    // ...他の標準属性も必要に応じて追加
  },
  args: {
    // 各StoryのデフォルトArgs
    placeholder: "テキストを入力",
    disabled: false,
    error: false,
    type: "text",
    onChange: action("changed"),
  },
};

export default meta;

// Story定義
type Story = StoryObj<InputProps>; // Props型を明示的に指定

export const Default: Story = {
  args: {
    placeholder: "デフォルト入力",
  },
};

export const WithValue: Story = {
  args: {
    value: "入力済みの値",
    placeholder: "デフォルト入力",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "無効な入力",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: "エラー入力",
    error: true,
  },
};
