import { ReactNode } from "react";
import { AuthProvider } from "./auth/auth";
import { ValueInputProvider } from "./valueInput/valueInput";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ValueInputProvider>{children}</ValueInputProvider>
    </AuthProvider>
  );
};

export default Providers;
