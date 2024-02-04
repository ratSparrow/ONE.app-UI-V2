/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const FormSelectField = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  options,
  defaultValue,
}) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={[
              {
                value: "9.0 - 10.00 AM",
                label: "9.0 - 10.00 AM",
              },
              {
                value: "10.00 - 11.00 AM",
                label: "10.00 - 11.00 AM",
              },
              {
                value: "11.00 - 12.00 AM",
                label: "11.00 - 12.00 AM",
              },
              {
                value: "12.00 - 01.00 PM",
                label: "12.00 - 01.00 PM",
              },
              {
                value: "04.00 - 05.00 PM",
                label: "04.00 - 05.00 PM",
              },
              {
                value: "05.00 - 06.00 PM",
                label: "05.00 - 06.00 PM",
              },
              {
                value: "06.00 - 07.00 PM",
                label: "06.00 - 07.00 PM",
              },
              {
                value: "07.00 - 08.00 PM",
                label: "07.00 - 08.00 PM",
              },
            ]}
            value={value}
            style={{ width: "200px" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
