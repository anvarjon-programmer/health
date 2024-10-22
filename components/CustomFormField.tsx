"use client";
import Image from "next/image";
import { Control } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

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
// export enum FormFieldType {
//   INPUT = "input",
//   TEXTAREA = "textarea",
//   PHONE_INPUT = "phoneInput",
//   CHECKBOX = "checkbox",
//   DATE_PICKER = "datePicker",
//   SELECT = "select",
//   SKELETON = "skeleton",
// }

interface CustomProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
}
const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { iconSrc, iconAlt, placeholder } = props;
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="shad-input bottom-0"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="UZ"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value as E16Number | undefined}
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      );
  }
};
const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex-1">
            {fieldType !== FormFieldType.CHECKBOX && label && (
              <FormLabel>{label}</FormLabel>
            )}
            <RenderField field={field} props={props} />

            <FormMessage className="shad-error" />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CustomFormField;
