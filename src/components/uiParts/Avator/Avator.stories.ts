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
    src: "https://via.placeholder.com/150", // デフォルトの画像URL（プレースホルダー）
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
    src: "https://via.placeholder.com/150/007bff/ffffff?text=S",
    alt: "Small Avator",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    src: "https://via.placeholder.com/150/28a745/ffffff?text=M",
    alt: "Medium Avator",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    src: "https://via.placeholder.com/150/dc3545/ffffff?text=L",
    alt: "Large Avator",
    size: "large",
  },
};

// 形状のStory (提供されたAvatorPropsには形状がないため、Argsでは制御できない)
// 例として、形状クラスを直接渡す方法を示すが、AvatorPropsにshapeがない場合はArgTypesで制御できない
/*
export const Circle: Story = {
    args: {
        src: 'https://via.placeholder.com/150/6c757d/ffffff?text=C',
        alt: 'Circle Avator',
        size: 'medium',
        // shape プロパティがないため Args で制御できない
        // className: 'storybook-avator--circle', // またはこのようにCSSクラスを直接渡す
    },
};
*/

export const WithBrokenImage: Story = {
  args: {
    src: "invalid-image-url", // 存在しないURL
    alt: "壊れた画像",
    size: "medium",
    // 壊れた画像の場合、altテキストが表示されることを確認
  },
};
