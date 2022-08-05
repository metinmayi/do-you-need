import React, { FormEvent } from 'react';
import { Form } from 'react-bootstrap';
import { StyledForm } from './styledForm';

interface FormComponentProps {
  children: JSX.Element[];
  className?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}
const FormComponent: React.FC<FormComponentProps> = ({
  children,
  className,
  onSubmit,
}) => {
  return (
    <Form
      as={StyledForm}
      className={className}
      onSubmit={(e) => (onSubmit ? onSubmit(e) : null)}
    >
      {children}
    </Form>
  );
};

export { FormComponent };
