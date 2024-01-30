import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
