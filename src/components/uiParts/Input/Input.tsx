import { InputHTMLAttributes, forwardRef } from "react";
import "./Input.css"; // プレーンなCSSファイルをインポート

// Input コンポーネントが受け取るPropsの型定義
// 標準のInput要素の全ての属性を拡張
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  error?: boolean;
  // type, value, onChange, placeholderなどの標準属性はInputHTMLAttributesに含まれる
}

/**
 * 再利用可能なテキスト入力フィールドコンポーネント
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled = false,
      error = false,
      className, // 外部からClassNameを受け取れるように
      ...props
    },
    ref
  ) => {
    // クラス名を生成・結合
    const inputClasses = [
      "storybook-input", // 基本クラス
      disabled ? "storybook-input--disabled" : "", // disabledクラス
      error ? "storybook-input--error" : "", // errorクラス
      className, // 外部からのClassNameも適用
    ]
      .join(" ")
      .trim();

    return (
      <input
        ref={ref}
        className={inputClasses}
        disabled={disabled}
        {...props} // type, value, onChange, placeholderなどの標準HTML属性を受け取る
      />
    );
  }
);

Input.displayName = "Input"; // React DevToolsでの表示名
