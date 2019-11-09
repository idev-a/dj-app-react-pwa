import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Discover.styles.scss";
import { Button, Collapse, Drawer, Icon, Input, Typography } from "antd";
import { LocationSearch } from "../../components/geoSearch";
import { Select, Radio } from "antd";
import Popup from "reactjs-popup";
import { HITCard, MapIcon, PROCard } from "../../components/vectorComponents";
import { TagsInput } from "../../components/tags";
import { BannerWithSub } from "../../components/bannerWithSub";
import { CardSection } from "../../components/cardSection";
import { DatePicker } from "../../components/datepicker";
import api from '../../config';
import { T } from "antd/lib/upload/utils";
const { Option } = Select;
const { Title, Text } = Typography;

const defaultValues = {
  feedbackPrice: 0,
};

const Discover = props => {
  const [state, setState] = useState({ ...defaultValues });

  return (
    <div className="bg-colored">
      <section className="section-adjust flex-center">
        <div style={{ background: "white" }}>
            <div className="full-section">
                <Text>Menu1</Text>
                <Text>Menu 2</Text>
            </div>
            <div className={"wrapper"}>
                <Text>Discover Page</Text>
            </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
    token: state.auth.user.token
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
