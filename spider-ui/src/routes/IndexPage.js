import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import MainLayout from "../components/MainLayout";
function IndexPage() {
  return (
    <MainLayout>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
