"use client";
import { Control } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { FormFieldType } from "./forms/PatientForm";
import { Input } from "./ui/input";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field:any) => React.ReactNode
}

const CustomFormField = ({ control, fieldType, name, label }: CustomProps) => {
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex">
            {fieldType !== FormFieldType.CHECKBOX &&
              label(<FormLabel>{label}</FormLabel>)}
          </FormItem>
        )}
      />
    </div>
  );
};

export default CustomFormField;
