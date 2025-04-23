import React, { HTMLAttributes } from "react";
import "./Text.css"; // プレーンなCSSファイルをインポート

// Text コンポーネントが受け取るPropsの型定義
export interface TextProps extends HTMLAttributes<HTMLElement> {
  // HTMLElementに変更して汎用性を高める
  /**
   * 表示するテキスト内容
   */
  children: React.ReactNode;
  /**
   * テキストの色（default, primary, secondary, success, dangerなど）
   * @default 'default'
   */
  color?: "default" | "primary" | "secondary" | "success" | "danger" | string; // カスタム色も受け取れるように string も追加
  /**
   * テキストのサイズ
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
  /**
   * テキストを太字にするか
   * @default false
   */
  bold?: boolean;
  /**
   * テキストをイタリック体にするか
   * @default false
   */
  italic?: boolean;
  /**
   * テキストのHTML要素タグ
   * @default 'p'
   */
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * 再利用可能な汎用テキストコンポーネント
 * サイズはクラスで、色はCSS変数で管理します
 */
export const Text = ({
  children,
  color = "default",
  size = "medium",
  bold = false,
  italic = false,
  as: Element = "p", // デフォルトのHTMLタグはp
  className, // 外部からのClassNameを受け取る
  style, // 標準のstyle属性を受け取れるように
  ...props
}: TextProps) => {
  // クラス名を生成・結合
  const textClasses = [
    "storybook-text", // 基本クラス
    `storybook-text--${size}`, // サイズクラス
    bold ? "storybook-text--bold" : "", // boldクラス
    italic ? "storybook-text--italic" : "", // italicクラス
    // 事前定義されたカラーバリエーションがある場合はクラスを追加
    color &&
    ["default", "primary", "secondary", "success", "danger"].includes(color)
      ? `storybook-text--color-${color}`
      : "",
    className, // 外部からのClassNameも適用
  ]
    .join(" ")
    .trim();

  // カスタム色（文字列）の場合はCSS変数として適用
  const textStyle = {
    ...(typeof color === "string" &&
    !["default", "primary", "secondary", "success", "danger"].includes(color)
      ? { "--text-color": color }
      : {}),
    ...style, // 外部からのstyleも適用
  } as React.CSSProperties;

  // 指定されたElementタグでレンダリング
  return (
    <Element className={textClasses} style={textStyle} {...props}>
      {children}
    </Element>
  );
};
