import type { Meta, StoryObj } from "@storybook/react";

import { Label, LabelProps } from "./Label"; // コンポーネントとProps型をインポート
// Storybookでのコンポーネントメタデータ定義
const meta: Meta<typeof Label> = {
  title: "Atoms/Label", // Storybookのサイドバーでの表示名と階層
  component: Label, // 対象となるコンポーネント
  tags: ["autodocs"], // ドキュメントを自動生成
  argTypes: {
    // Propsに対応するコントロール設定
    children: {
      // Labelは子要素としてテキストを受け取る形式
      control: "text",
      description: "ラベルのテキスト",
    },
    htmlFor: {
      control: "text",
      description: "関連付けるフォームコントロールのID",
    },
    bold: {
      control: "boolean",
      description: "テキストを太字にするか",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "ラベルのサイズ",
    },
    // 標準HTML属性の一部もArgsで制御可能
    className: { control: "text" },
  },
  args: {
    // 各StoryのデフォルトArgs
    children: "ラベルテキスト",
    htmlFor: undefined,
    bold: false,
    size: "medium",
  },
};

export default meta;

// Story定義
type Story = StoryObj<LabelProps>; // Props型を明示的に指定

export const Default: Story = {
  args: {
    children: "デフォルトラベル",
  },
};

export const Bold: Story = {
  args: {
    children: "太字ラベル",
    bold: true,
  },
};

export const Small: Story = {
  args: {
    children: "小さいラベル",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "大きいラベル",
    size: "large",
  },
};
