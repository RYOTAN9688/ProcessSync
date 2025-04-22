import React, { HTMLAttributes } from "react";
import "./Loading.css"; // プレーンなCSSファイルをインポート

// Loading コンポーネントが受け取るPropsの型定義
export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * ローディングスピナーの色
   * @default 'currentColor'
   */
  color?: string;
  /**
   * ローディングスピナーのサイズ
   * @default 'medium'
   */
  size?: "small" | "medium" | "large"; // サイズを文字列で指定
}

/**
 * 再利用可能なローディングスピナーコンポーネント
 * サイズはクラスで、色はCSS変数で管理します
 */
export const Loading = ({
  color = "currentColor", // デフォルトは親要素の文字色
  size = "medium",
  className, // 外部からClassNameを受け取れるように
  style, // 標準のstyle属性を受け取れるように
  ...props
}: LoadingProps) => {
  // クラス名を生成・結合
  const loadingClasses = [
    "storybook-loading", // 基本クラス
    `storybook-loading--${size}`, // サイズクラス
    className, // 外部からのClassNameも適用
  ]
    .join(" ")
    .trim();

  // 色をCSS変数として定義し、styleプロパティに渡す
  const loadingStyle = {
    "--loading-color": color, // CSS変数 --loading-color を定義
    ...style, // 外部からのstyleも適用
  } as React.CSSProperties; // CSS変数を含むスタイルオブジェクトの型アサーション

  // スピナー自体はCSSの疑似要素で描画することが多いが、シンプルにボーダーで表現
  return (
    <div
      className={loadingClasses}
      style={loadingStyle} // CSS変数を渡す
      {...props} // その他の標準Div属性を受け取る
    >
      {/* 中に要素は含めない */}
    </div>
  );
};
