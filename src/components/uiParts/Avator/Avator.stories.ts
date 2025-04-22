import type { Meta, StoryObj } from "@storybook/react";

// コンポーネントとProps型をインポート
// ファイル名とコンポーネント名/Props名は Avator に注意
import { Avator, AvatorProps } from "./Avator";

// Storybookでのコンポーネントメタデータ定義
// タイトルも Avator に注意
const meta: Meta<typeof Avator> = {
  title: "Atoms/Avator", // Storybookのサイドバーでの表示名と階層
  component: Avator, // 対象となるコンポーネント
  tags: ["autodocs"], // ドキュメントを自動生成
  argTypes: {
    // Propsに対応するコントロール設定
    src: {
      control: "text", // URLをテキストで指定
      description: "アバター画像のソースURL",
    },
    alt: {
      control: "text",
      description: "画像が表示できない場合の代替テキスト",
    },
    size: {
      control: "select", // ドロップダウンで選択
      options: ["small", "medium", "large"], // sizeの選択肢
      description: "アバターのサイズ",
    },
  },
  args: {
    // 各StoryのデフォルトArgs
    src: "https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_640.jpg", // デフォルトの画像URL（プレースホルダー）
    alt: "ユーザーアバター", // デフォルト代替テキスト
    size: "medium", // デフォルトサイズ
    // 形状（circle, squareなど）は AvatorProps に含まれていないため、Argsでは制御しない
  },
};

export default meta;

// Story定義
// Props型を AvatorProps に注意
type Story = StoryObj<AvatorProps>;

// 各サイズのStory
export const Small: Story = {
  args: {
    src: "https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_640.jpg",
    alt: "Small Avator",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    src: "https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_640.jpg",
    alt: "Medium Avator",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    src: "https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_640.jpg",
    alt: "Large Avator",
    size: "large",
  },
};

export const WithBrokenImage: Story = {
  args: {
    src: "invalid-image-url", // 存在しないURL
    alt: "壊れた画像",
    size: "medium",
    // 壊れた画像の場合、altテキストが表示されることを確認
  },
};
