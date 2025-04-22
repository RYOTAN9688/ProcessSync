import React, { LabelHTMLAttributes } from "react";
import "./Label.css"; // プレーンなCSSファイルをインポート

// Label コンポーネントが受け取るPropsの型定義
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * ラベルの表示テキストまたは子要素
   */
  children: React.ReactNode; // Labelは子要素としてテキストを受け取るのが一般的
  /**
   * ラベルが関連付けられるフォームコントロールのID
   */
  htmlFor?: string;
  /**
   * ラベルを太字にするか
   * @default false
   */
  bold?: boolean;
  /**
   * ラベルのサイズ
   * @default 'medium'
   */
  size?: "small" | "medium" | "large"; // Labelにもサイズを追加
}

/**
 * 再利用可能なラベルコンポーネント
 */
export const Label = ({
  children,
  htmlFor,
  bold = false,
  size = "medium",
  className, // 外部からClassNameを受け取れるように
  ...props
}: LabelProps) => {
  // クラス名を生成・結合
  const labelClasses = [
    "storybook-label", // 基本クラス
    `storybook-label--${size}`, // サイズクラス
    bold ? "storybook-label--bold" : "", // boldクラス
    className, // 外部からのClassNameも適用
  ]
    .join(" ")
    .trim();

  return (
    <label htmlFor={htmlFor} className={labelClasses} {...props}>
      {children}
    </label>
  );
};
