import React, { useState } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../../config";
import InstanceProps from "../../utils/InstanceProps";
import { getStatusIcon } from "./getStatus";
import CardInstanceStatusOverlay from "./CardInstanceStatusOverlay";
import { transparentize } from "polished";
import getDate from "../../utils/getDate";
import CopyText from "../../utils/CopyText";

const InstanceWrapper = styled.article`
  position: relative;
  user-select: none;
`;

const Instance = styled.article`
  padding: 0 16px;
  font-size: 16px;
`;

const InstanceHeader = styled.header`
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InstanceName = styled.h4`
  font-weight: 400;
  font-size: 20px;
  margin: 0;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InstanceNumber = styled.span`
  color: ${props => transparentize(0.5, props.theme.color.lightOne)};
  font-size: 16px;
  margin-left: 10px;
`;

const InstanceRow = styled.div`
  margin-bottom: 8px;
  display: flex;
`;

const InstanceRowKey = styled.b`
  width: 125px;
  text-align: right;
  flex: none;
`;

const SmallStatusIcon = styled.div`
  cursor: pointer;
`;

const CardInstance = (props: {
  instance: InstanceProps;
  instanceNumber: number;
}) => {
  const instanceIsBooting =
    props.instance.instanceVersion === "primal" &&
    !props.instance.instanceInGhostMode &&
    !props.instance.instanceUpdatingToVersion;

  const instanceIsGhost =
    props.instance.instanceVersion === "primal" &&
    props.instance.instanceInGhostMode &&
    props.instance.instanceUpdatingToVersion;

  const instanceIsUpdating =
    props.instance.instanceVersion !== "primal" &&
    props.instance.instanceUpdatingToVersion;

  const statusCode = instanceIsBooting
    ? 0
    : instanceIsGhost
    ? 1
    : instanceIsUpdating
    ? 2
    : props.instance.instanceHealthCode;

  const [isOverlayVisible, setIsOverlayVisible] = useState(statusCode < 3);

  const filteredAdvancedCardData = Object.entries(props.instance).filter(
    row => {
      if (
        Object.keys(APP_CONFIG.CARD_ADVANCED_MAPPING).includes(row[0] as string)
      ) {
        return row;
      }
    },
  );

  return (
    <InstanceWrapper>
      {isOverlayVisible && (
        <CardInstanceStatusOverlay
          onClick={() => setIsOverlayVisible(false)}
          statusCode={statusCode}
          instance={props.instance}
        />
      )}
      <Instance>
        <InstanceHeader>
          <InstanceName>
            {props.instance.instanceIsChosenOne && "👑 "}
            {props.instance.instanceID}
            <InstanceNumber>#{props.instanceNumber}</InstanceNumber>
          </InstanceName>

          {!isOverlayVisible && (
            <SmallStatusIcon
              title="Show Info"
              onClick={() => setIsOverlayVisible(true)}
            >
              {getStatusIcon(statusCode)}
            </SmallStatusIcon>
          )}
        </InstanceHeader>
        <div>
          <InstanceRow>
            <InstanceRowKey>IP:</InstanceRowKey>
            <CopyText value={props.instance.instancePublicIP}>
              {props.instance.instancePublicIP}
            </CopyText>
          </InstanceRow>
          <InstanceRow>
            <InstanceRowKey>Version:</InstanceRowKey>
            <CopyText value={props.instance.instanceVersion}>
              {`${props.instance.instanceVersion} `}
              {props.instance.instanceBuild &&
                `(build: ${props.instance.instanceBuild}`}
            </CopyText>
          </InstanceRow>
          <InstanceRow>
            <InstanceRowKey>Deployed:</InstanceRowKey>
            <CopyText value={props.instance.instanceUpdatedAt}>
              {getDate(props.instance.instanceUpdatedAt)}
            </CopyText>
          </InstanceRow>
          <InstanceRow>
            <InstanceRowKey>Disk:</InstanceRowKey>
            <CopyText
              value={`Using ${props.instance.instanceDiskUsedGb} of ${props.instance.instanceDiskUsedGb} total | ${props.instance.instanceType}`}
            >
              {props.instance.instancePublicIP}
            </CopyText>
          </InstanceRow>
        </div>
        {filteredAdvancedCardData && (
          <>
            <br />
            <hr />
          </>
        )}
        {filteredAdvancedCardData.map(row => {
          const advancedData = Object.entries(
            APP_CONFIG.CARD_ADVANCED_MAPPING,
          ).find(obj => {
            return obj[0] === row[0];
          });
          return (
            <InstanceRow key={row[0]}>
              <InstanceRowKey>{advancedData[1]}:</InstanceRowKey>
              <CopyText value={row[1]}>{row[1]}</CopyText>
            </InstanceRow>
          );
        })}
      </Instance>
    </InstanceWrapper>
  );
};

export default CardInstance;
