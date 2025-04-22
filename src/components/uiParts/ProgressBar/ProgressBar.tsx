import React, { HTMLAttributes } from "react";
import "./ProgressBar.css"; // プレーンなCSSファイルをインポート

// ProgressBar コンポーネントが受け取るPropsの型定義
export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 進捗率（0から100までの数値）
   */
  progress: number;
  /**
   * プログレスバーの色
   * @default '#007bff'
   */
  color?: string;
  /**
   * プログレスバーの高さ
   * @default 'medium'
   */
  height?: "small" | "medium" | "large"; // 高さを文字列で指定
  /**
   * 進捗率のテキストを表示するか
   * @default false
   */
  showText?: boolean;
}

/**
 * 再利用可能なプログレスバーコンポーネント
 * 高さ・サイズはクラスで、色はCSS変数で管理します
 */
export const ProgressBar = ({
  progress,
  color = "#007bff", // デフォルト色
  height = "medium",
  showText = false,
  className, // 外部からClassNameを受け取れるように
  style, // 標準のstyle属性を受け取れるように
  ...props
}: ProgressBarProps) => {
  // 0から100の範囲にクランプ
  const clampedProgress = Math.max(0, Math.min(100, progress));

  // クラス名を生成・結合
  const progressBarClasses = [
    "storybook-progress-bar", // コンテナの基本クラス
    `storybook-progress-bar--height-${height}`, // 高さクラス
    className, // 外部からのClassNameも適用
  ]
    .join(" ")
    .trim();

  // バー部分のスタイル（幅をインラインスタイルで制御、色はCSS変数）
  const barStyle = {
    width: `${clampedProgress}%`,
    // background-color はCSS変数経由でCSSで指定
  } as React.CSSProperties;

  // コンテナ部分のスタイル（色をCSS変数として渡す）
  const containerStyle = {
    "--progress-bar-color": color, // CSS変数 --progress-bar-color を定義
    ...style, // 外部からのstyleも適用
  } as React.CSSProperties;

  return (
    <div className={progressBarClasses} style={containerStyle} {...props}>
      <div className="storybook-progress-bar__bar" style={barStyle}></div>
      {showText && (
        <div className="storybook-progress-bar__text">
          {`${clampedProgress}%`}
        </div>
      )}
    </div>
  );
};
