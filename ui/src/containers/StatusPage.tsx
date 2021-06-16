import React, { memo } from "react";
import styled from "styled-components";

import PageContent from "../components/Layout/PageContent";
import Sidebar from "../components/Sidebar/Sidebar";

const Wrapper = styled.div`
  display: flex;
`;

const StatusPage = () => {
  return (
    <Wrapper>
      <Sidebar />
      <PageContent />
    </Wrapper>
  );
};

export default memo(StatusPage);
