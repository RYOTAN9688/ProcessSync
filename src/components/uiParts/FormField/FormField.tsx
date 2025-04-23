import "./FormField.css"; // CSSファイルをインポート

// 使用するAtomsをインポート（パスが変更されます）
// uiParts/molecules から見て uiParts/atoms は ../atoms になります
import { Label, LabelProps } from "../Label/Label";
import { Input, InputProps } from "../Input/Input"; // デフォルトはInputを使用
import { Text } from "../Text/Text"; // エラーメッセージ表示用

// FormField コンポーネントが受け取るPropsの型定義（変更なし）
export interface FormFieldProps {
  /**
   * ラベルのテキスト
   */
  label: string;
  /**
   * 入力フィールドのID (LabelのhtmlForと紐付け)
   */
  inputId: string;
  /**
   * Input コンポーネントに渡すProps
   * 標準InputHTMLAttributesからidを除外した型
   */
  inputProps: Omit<InputProps, "id">;
  /**
   * エラーメッセージ（表示する場合）
   */
  errorMessage?: string;
  /**
   * Label コンポーネントに渡すProps（オプション）
   * 標準LabelHTMLAttributesからhtmlFor, childrenを除外した型
   */
  labelProps?: Omit<LabelProps, "htmlFor" | "children">;
}

/**
 * ラベル付き入力フィールドコンポーネント (Molecule)
 * Label と Input を組み合わせます
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  inputId,
  inputProps,
  errorMessage,
  labelProps,
}) => {
  return (
    <div className="storybook-form-field">
      {/* Label Atom */}
      <Label htmlFor={inputId} {...labelProps}>
        {label}
      </Label>

      {/* Input Atom */}
      <Input id={inputId} {...inputProps} />

      {/* エラーメッセージ */}
      {errorMessage && (
        <Text
          color="danger"
          size="small"
          className="storybook-form-field__error-message"
        >
          {errorMessage}
        </Text>
      )}
    </div>
  );
};
