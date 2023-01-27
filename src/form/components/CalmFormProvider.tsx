import React, { FC, HTMLAttributes } from 'react';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

export interface CalmFormProviderProps
  extends Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  methods: UseFormReturn<any>;
  onSubmit: SubmitHandler<any>;
}

export const CalmFormProvider: FC<CalmFormProviderProps> = ({
  methods,
  onSubmit,
  children,
  className,
  ...props
}) => {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={className}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};
