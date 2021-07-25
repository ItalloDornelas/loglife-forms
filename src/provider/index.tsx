import { ReactNode } from "react";
import { AuthProvider } from "./auth/auth";
import { ValueInputProvider } from "./valueInput/valueInput";
import { CardProvider } from "./card/card";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ValueInputProvider>
        <CardProvider>{children}</CardProvider>
      </ValueInputProvider>
    </AuthProvider>
  );
};

export default Providers;
