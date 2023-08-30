import { FC, PropsWithChildren, Suspense } from "react";

import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar";

import { Spinner } from "shared/ui/Spinner/Spinner";

import styles from "./layout.module.scss";

interface ILayout {
  cls?: string;
}

export const Layout: FC<PropsWithChildren<ILayout>> = ({ children }) => (
  <>
    <Sidebar />
    <div className={styles.contentPage}>
      <Header />
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </div>
  </>
);
