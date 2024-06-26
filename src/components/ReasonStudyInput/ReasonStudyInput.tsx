import { FC } from "react";
import { inputReasons } from "../../helpers/ComponentData";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormDataReason } from "../../helpers/InterfaceData";
import {
  StyledReasonStudyInput,
  StyledReasonStudyInputLabel,
  StyledReasonStudyInputWrapper,
} from "./ReasonStudyInput.styled";
import { StyledError } from "../InputAuth/InputAuth.styled";

type Name = "fullName" | "email" | "phoneNumber";

interface ReasonStudyInputProps {
  register: UseFormRegister<FormDataReason>;
  errors: FieldErrors<FormDataReason>;
}

const ReasonStudyInput: FC<ReasonStudyInputProps> = ({ register, errors }) => {
  const getInputType: (name: string) => "tel" | "email" | "text" = (name) => {
    if (name === "phoneNumber") {
      return "tel";
    } else {
      return name === "email" ? "email" : "text";
    }
  };
  return (
    <StyledReasonStudyInputWrapper>
      {inputReasons.map((inputReason, index) => (
        <StyledReasonStudyInputLabel key={index}>
          <StyledReasonStudyInput
            type={getInputType(inputReason.name)}
            placeholder={inputReason.placeholder}
            $error={!!errors[inputReason.name as Name]}
            {...register(inputReason.name as Name)}
          />
          <StyledError>
            {errors[inputReason.name as Name]?.message || ""}
          </StyledError>
        </StyledReasonStudyInputLabel>
      ))}
    </StyledReasonStudyInputWrapper>
  );
};

export default ReasonStudyInput;
