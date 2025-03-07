
import { OnboardingProvider } from "./context/OnboardingContext";
import "remixicon/fonts/remixicon.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <OnboardingProvider>{children}</OnboardingProvider>
      </body>
    </html>
  );
}
