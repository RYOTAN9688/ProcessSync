import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar, ProgressBarProps } from "./ProgressBar"; // コンポーネントとProps型をインポート

// Storybookでのコンポーネントメタデータ定義
const meta: Meta<typeof ProgressBar> = {
  title: "Atoms/ProgressBar", // Storybookのサイドバーでの表示名と階層
  component: ProgressBar, // 対象となるコンポーネント
  tags: ["autodocs"], // ドキュメントを自動生成
  argTypes: {
    // Propsに対応するコントロール設定
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 }, // 進捗率を数値スライダーで制御
      description: "進捗率 (0-100)",
    },
    color: {
      control: "color", // 色をカラーピッカーで制御
      description: "プログレスバーの色",
    },
    height: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "プログレスバーの高さ",
    },
    showText: {
      control: "boolean", // テキスト表示をチェックボックスで制御
      description: "進捗率のテキストを表示するか",
    },
    // 標準Div属性もArgsで制御可能
    className: { control: "text" },
    style: { control: "object" },
  },
  args: {
    // 各StoryのデフォルトArgs
    progress: 50, // デフォルト進捗率
    color: "#007bff", // 例: ブランドカラー
    height: "medium",
    showText: false,
  },
};

export default meta;

// Story定義
type Story = StoryObj<ProgressBarProps>; // Props型を明示的に指定

export const Default: Story = {
  args: {
    progress: 50,
  },
};

export const Completed: Story = {
  args: {
    progress: 100,
    color: "#28a745", // 例: Success color
  },
};

export const LowProgress: Story = {
  args: {
    progress: 20,
    color: "#ffc107", // 例: Warning color
  },
};

export const WithText: Story = {
  args: {
    progress: 75,
    showText: true,
    height: "large", // テキスト表示に適した高さ
  },
};

export const DifferentHeight: Story = {
  args: {
    progress: 60,
    height: "small",
    color: "#6c757d", // Example: Secondary color
  },
};
