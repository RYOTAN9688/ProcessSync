import type { Meta, StoryObj } from "@storybook/react";

import { Loading, LoadingProps } from "./Loading"; // コンポーネントとProps型をインポート

// Storybookでのコンポーネントメタデータ定義
const meta: Meta<typeof Loading> = {
  title: "Atoms/Loading", // Storybookのサイドバーでの表示名と階層
  component: Loading, // 対象となるコンポーネント
  tags: ["autodocs"], // ドキュメントを自動生成
  argTypes: {
    // Propsに対応するコントロール設定
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "ローディングスピナーのサイズ",
    },
    color: {
      control: "color", // 色をカラーピッカーで制御
      description: "ローディングスピナーの色",
    },
    // 標準Div属性もArgsで制御可能
    className: { control: "text" },
    style: { control: "object" },
  },
  args: {
    // 各StoryのデフォルトArgs
    size: "medium",
    color: "#007bff", // 例: ブランドカラー
  },
};

export default meta;

// Story定義
type Story = StoryObj<LoadingProps>; // Props型を明示的に指定

export const Default: Story = {
  args: {
    // デフォルト設定
  },
};

export const LargeRed: Story = {
  args: {
    size: "large",
    color: "#dc3545", // 例: Danger color
  },
};

export const SmallSecondary: Story = {
  args: {
    size: "small",
    color: "#6c757d", // 例: Secondary color
  },
};

export const CustomColor: Story = {
  args: {
    color: "purple", // カスタム色
  },
};
