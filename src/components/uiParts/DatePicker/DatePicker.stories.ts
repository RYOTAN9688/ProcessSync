import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { DatePicker, DatePickerProps } from "./DatePicker"; // コンポーネントとProps型をインポート

// Storybookでのコンポーネントメタデータ定義
const meta: Meta<typeof DatePicker> = {
  title: "Atoms/DatePicker", // Storybookのサイドバーでの表示名と階層
  component: DatePicker, // 対象となるコンポーネント
  tags: ["autodocs"], // ドキュメントを自動生成
  argTypes: {
    // Propsに対応するコントロール設定
    value: {
      control: "date", // Storybookのdateピッカーで制御
      description: "選択されている日付の値 (YYYY-MM-DD形式)",
    },
    disabled: {
      control: "boolean",
      description: "無効化されているか",
    },
    error: {
      control: "boolean",
      description: "エラー状態か",
    },
    onChange: {
      action: "date changed", // 'date changed'という名前でActionログに出力
      description: "日付変更時のイベントハンドラ",
    },
    // 標準Input属性の一部もArgsで制御可能
    id: { control: "text", description: "フィールドのID" },
    name: { control: "text", description: "フィールドの名前 (フォーム用)" },
    min: { control: "date", description: "選択可能な最小日付" },
    max: { control: "date", description: "選択可能な最大日付" },
  },
  args: {
    // 各StoryのデフォルトArgs
    value: undefined, // デフォルトは未選択
    disabled: false,
    error: false,
    onChange: action("date changed"),
    min: undefined,
    max: undefined,
  },
};

export default meta;

// Story定義
type Story = StoryObj<DatePickerProps>; // Props型を明示的に指定

export const Default: Story = {
  args: {
    // デフォルト設定
  },
};

export const WithValue: Story = {
  args: {
    value: "2025-04-22", // 特定の日付をデフォルト値として設定
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "2025-04-22",
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    value: "2025-04-22",
  },
};

export const WithMinMaxDates: Story = {
  args: {
    min: "2025-04-01", // 2025年4月1日以降
    max: "2025-04-30", // 2025年4月30日以前
    value: "2025-04-15", // その範囲内の日付
  },
};
