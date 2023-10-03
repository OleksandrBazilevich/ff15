import { FormEvent, createRef, useState } from "react";

type FormData = Record<string, any>;

export type Erorrs = Record<keyof FormData, string>;

type FormState = {
  isSubmitted: boolean;
  errors: Erorrs;
};

interface RegisterOptions {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  regex?: RegExp;
}

export const useForm = <T extends FormData>(initialData: T) => {
  const inputRefs: Record<
    keyof T,
    React.RefObject<HTMLInputElement>
  > = {} as Record<keyof T, React.RefObject<HTMLInputElement>>;

  const [formData, setFormData] = useState<T>(initialData);
  const [formState, setFormState] = useState<FormState>({
    isSubmitted: false,
    errors: {} as Record<keyof FormData, string>
  });
  const [hasErrors, setHasErrors] = useState(
    Object.keys(formState.errors).length > 0
  );

  const resetFields = () => {
    setFormData(initialData);
    setFormState({
      isSubmitted: false,
      errors: {}
    });
    setHasErrors(false);
  };

  const handleFieldChange = (name: keyof T, value: T[keyof T]) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (onSubmit: (data: T) => void) => (e: FormEvent) => {
    e.preventDefault();

    if (Object.values(formData).includes("")) {
      setFormState({ ...formState, isSubmitted: false });

      return;
    }

    if (!hasErrors) {
      setFormState({ ...formState, isSubmitted: true, errors: {} });
      onSubmit(formData);
      resetFields();
    } else {
      setFormState({ ...formState, isSubmitted: false });
    }
  };

  const register = (
    name: keyof T,
    options: RegisterOptions = {
      required: true
    }
  ) => {
    if (!inputRefs[name]) {
      inputRefs[name] = createRef();
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFieldChange(name, e.target.value as T[keyof T]);
    };

    const handleBlur = () => {
      const errors: Record<keyof T, string> = {} as Record<keyof T, string>;

      const { required, minLength, maxLength, regex } = options;

      if (required && formData[name].length === 0) {
        errors[name] = "This field is required";
      }

      if (minLength !== undefined && formData[name].length < minLength) {
        errors[name] = `Field must be at least ${minLength} characters`;
      }

      if (maxLength !== undefined && formData[name].length > maxLength) {
        errors[name] = `Field cant be more than ${maxLength} characters`;
      }

      if (regex !== undefined && !regex.test(formData[name])) {
        errors[name] = "Field entered incorrectly";
      }

      const updatedErrors = {
        ...formState.errors,
        [name]: errors[name] || ""
      };

      setFormState({
        ...formState,
        errors: updatedErrors
      });

      setHasErrors(
        Object.values(updatedErrors).length > 0 &&
          Object.values(updatedErrors).some((elem) => elem !== "")
      );
    };

    return {
      name,
      refs: inputRefs[name],
      value: formData[name],
      onChange: handleChange,
      onBlur: handleBlur
    };
  };

  return {
    hasErrors,
    formState,
    handleSubmit,
    register
  };
};
