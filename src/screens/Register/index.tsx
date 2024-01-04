import useRegister from "@hooks/useRegister";
import React, { useMemo } from "react";
import StoreInformation from "./StoreInformation";
import ContactInformation from "./ContactInformation";
import PhoneNumberAndPassword from "./PhoneNumberAndPassword";

interface IRegisterProps {}

const Register = (props: IRegisterProps) => {
  const {} = props ?? {};
  const { part, onNextPart, onBackPart } = useRegister();
  const Component = useMemo(() => {
    switch (part) {
      case 1:
        return StoreInformation;
      case 2:
        return ContactInformation;
      case 3:
        return PhoneNumberAndPassword;
      // case 4:
      //   return PhoneNumberAndPassword;
      default:
        return StoreInformation;
    }
  }, [part]);
  return <Component onBackPart={onBackPart} onNextPart={onNextPart} />;
};

export default Register;
