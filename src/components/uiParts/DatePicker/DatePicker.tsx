import { InputHTMLAttributes, forwardRef } from "react";
import "./DatePicker.css"; // プレーンなCSSファイルをインポート

export interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  error?: boolean;
}

/**
 * 再利用可能な日付選択入力フィールドコンポーネント
 * ※ スタイルカスタマイズには限界があり、ブラウザのネイティブUIに依存します
 */
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
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
    const datePickerClasses = [
      "storybook-datepicker", // 基本クラス
      disabled ? "storybook-datepicker--disabled" : "", // disabledクラス
      error ? "storybook-datepicker--error" : "", // errorクラス
      className, // 外部からのClassNameも適用
    ]
      .join(" ")
      .trim();

    return (
      <input
        ref={ref}
        type="date" // type属性を 'date' に固定
        className={datePickerClasses}
        disabled={disabled}
        {...props} // value, onChange, id, nameなどの標準属性を受け取る
      />
    );
  }
);

DatePicker.displayName = "DatePicker"; // React DevToolsでの表示名
