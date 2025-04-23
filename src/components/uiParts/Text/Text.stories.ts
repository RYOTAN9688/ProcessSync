import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from "./Text"; // コンポーネントとProps型をインポート

// Storybookでのコンポーネントメタデータ定義
// タイトルに uiParts/ が追加されます
const meta: Meta<typeof Text> = {
  title: "uiParts/Text", // Storybookのサイドバーでの表示名と階層
  component: Text, // 対象となるコンポーネント
  tags: ["autodocs"], // ドキュメントを自動生成
  argTypes: {
    children: {
      // Textは子要素としてテキストを受け取る形式
      control: "text",
      description: "表示するテキスト内容",
    },
    color: {
      // control は文字列または select に対応
      control: "text", // カスタム色も指定できるようにテキスト入力
      // control: 'select', options: ['default', 'primary', 'secondary', 'success', 'danger', 'red', 'blue'], // 選択肢に固定する場合は select
      description: "テキストの色（default, primary, #ff00ff など）",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "テキストのサイズ",
    },
    bold: {
      control: "boolean",
      description: "テキストを太字にするか",
    },
    italic: {
      control: "boolean",
      description: "テキストをイタリック体にするか",
    },
    as: {
      control: "select",
      options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
      description: "使用するHTML要素タグ",
    },
    className: { control: "text" },
    style: { control: "object" },
  },
  args: {
    children: "汎用テキストコンポーネント",
    color: "default",
    size: "medium",
    bold: false,
    italic: false,
    as: "p",
  },
};

export default meta;

// Story定義（変更なし）
type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    children: "デフォルトのテキスト表示",
  },
};

export const PrimaryColor: Story = {
  args: {
    children: "プライマリーカラーのテキスト",
    color: "primary",
  },
};

export const LargeAndBold: Story = {
  args: {
    children: "大きくて太字のテキスト",
    size: "large",
    bold: true,
  },
};

export const AsHeading: Story = {
  args: {
    children: "見出しとして使用 (h1)",
    size: "large",
    bold: true,
  },
};

export const CustomColor: Story = {
  args: {
    children: "カスタム色のテキスト",
    color: "#ff6347", // 例: Tomato 色を直接指定
    size: "medium",
  },
};
