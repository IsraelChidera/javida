import "./globals.css";
import FloatingButton from "../components/widgets/FloatingButton";
import BackgroundMusic from "../components/widgets/BackgroundMusic";
import Loader from "../components/elements/utils/Loader";


export const metadata = {
  title: "JAVIDA'25",
  description: "Meet the Davids",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative`}
      >
        {children}

        <BackgroundMusic />
        <Loader />

       
      </body>
    </html>
  );
}
