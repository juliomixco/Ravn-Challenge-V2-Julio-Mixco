import React from "react";
import { PageHeader, HeaderTitle, PageContent } from "./Layout.style";

export const Layout: React.SFC<{}> = (props) => (
  <>
    <PageHeader>
      <HeaderTitle>Ravn Star Wars Registry</HeaderTitle>
    </PageHeader>

    <PageContent>{props.children}</PageContent>
  </>
);
