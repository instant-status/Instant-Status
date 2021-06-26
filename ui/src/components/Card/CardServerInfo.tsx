import APP_CONFIG from "@config/appConfig";
import { transparentize } from "polished";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { ServerProps } from "../../../../types/globalTypes";
import { globalStoreContext } from "../../store/globalStore";
import getDate from "../../utils/getDate";
import { getHealthColor, getHealthIcon } from "../../utils/getHealth";
import { getStateIcon } from "../../utils/getState";
import theme from "../../utils/theme";
import CopyText from "../Controls/CopyText";
import IconButton from "../Controls/IconButton";
import ProgressBar from "../Controls/ProgressBar";
import IconGithub from "../Icons/IconGithub";
import IconUbuntu from "../Icons/IconUbuntu";
import Stack from "../Layout/Stack";
import CardServerOverlay from "./CardServerOverlay";

const ServerWrapper = styled.section`
  position: relative;
  user-select: none;
`;

const Server = styled.article`
  padding: 0 16px;
  font-size: 16px;
  margin: 20px 0;
`;

const ServerHeader = styled.header`
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ServerName = styled.div`
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ServerRole = styled.h4<{ $color: string }>`
  font-size: 17px;
  margin: 0;
  text-transform: capitalize;
  color: ${(props) => props.$color};
`;

const ServerId = styled.span`
  color: ${(props) => transparentize(0.5, props.theme.color.lightOne)};
  font-weight: 400;
  font-size: 16px;
  display: inline-block;
`;

const ServerRow = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const ServerRowKey = styled.div`
  width: 110px;
  text-align: right;
  flex: none;
  opacity: 0.7;
  padding-right: 4px;
`;

const SmallStateIcon = styled.div`
  cursor: pointer;
  padding-right: 10px;
`;

const SmallHealthIcon = styled.div`
  cursor: pointer;
`;

const CardServer = (props: {
  server: ServerProps;
  isUpdating: boolean;
  isStartingUpdate: boolean;
}) => {
  const store = useContext(globalStoreContext);

  const serverIsBooting =
    props.server.server_app_version === `primal` &&
    !props.server.server_updating_app_to &&
    !props.server.server_updating_xapi_to;

  const stateCode = serverIsBooting
    ? 0
    : props.isStartingUpdate || props.server.server_update_progress !== 100
    ? 2
    : 3;

  const healthCode = props.server.server_health_code || 0;
  const diskUsed = Math.floor(
    (props.server.server_disk_used_gb / props.server.server_disk_total_gb) *
      100,
  );

  const diskColor =
    diskUsed >= 80
      ? theme.color.red
      : diskUsed >= 50
      ? theme.color.orange
      : theme.color.green;

  const [isStateOverlayVisible, setIsStateOverlayVisible] = useState(false);
  const [isHealthOverlayVisible, setIsHealthOverlayVisible] = useState(false);

  useEffect(() => {
    setIsStateOverlayVisible(stateCode < 3);
  }, [stateCode]);

  useEffect(() => {
    setIsHealthOverlayVisible(healthCode > 1);
  }, [healthCode]);

  const filteredAdvancedCardData = Object.entries(props.server).filter(
    (row) => {
      if (
        Object.keys(APP_CONFIG.CARD_ADVANCED_MAPPING).includes(row[0] as string)
      ) {
        return row;
      }
    },
  );

  return (
    <ServerWrapper>
      {isStateOverlayVisible && (
        <CardServerOverlay
          onClick={() => setIsStateOverlayVisible(false)}
          type="state"
          stateOrHealthCode={stateCode}
          isStartingUpdate={props.isStartingUpdate}
          server={props.server}
        />
      )}

      {isHealthOverlayVisible && (
        <CardServerOverlay
          onClick={() => setIsHealthOverlayVisible(false)}
          type="health"
          stateOrHealthCode={healthCode}
          isStartingUpdate={props.isStartingUpdate}
          server={props.server}
        />
      )}
      <Server>
        <ServerHeader>
          <Stack as={ServerName} spacing={2} align="baseline">
            <ServerRole $color={getHealthColor(healthCode)}>
              {props.server.server_role}
            </ServerRole>
            <ServerId>{props.server.server_id}</ServerId>
            <span>{props.server.server_is_chosen_one && `👑`}</span>
          </Stack>

          <SmallStateIcon
            title="Show Update Info"
            onClick={() => setIsStateOverlayVisible(true)}
          >
            {getStateIcon(stateCode)}
          </SmallStateIcon>

          <SmallHealthIcon
            title="Show Health Info"
            onClick={() => setIsHealthOverlayVisible(true)}
          >
            {getHealthIcon(healthCode)}
          </SmallHealthIcon>
        </ServerHeader>
        <div>
          <ServerRow>
            <ServerRowKey>IP:</ServerRowKey>
            <CopyText value={props.server.server_public_ip}>
              {props.server.server_public_ip}
            </CopyText>
            <IconButton
              onClick={() =>
                navigator.clipboard.writeText(
                  `ssh ubuntu@${props.server.server_public_ip} -i '${store.keyLocation}${props.server.server_key_file_name}.pem'`,
                )
              }
            >
              <IconUbuntu color={theme.color.lightOne} width="1em" />
            </IconButton>
          </ServerRow>
          <ServerRow>
            <ServerRowKey>Version:</ServerRowKey>
            <CopyText
              value={`${props.server.server_app_version} (xAPI ${props.server.server_xapi_version}`}
            >
              {props.server.server_app_version} (xAPI{` `}
              {props.server.server_xapi_version})
            </CopyText>
            <IconButton
              href={`${APP_CONFIG.GITHUB_VERSION_URL}${props.server.server_app_version}`}
            >
              <IconGithub color={theme.color.lightOne} width="1em" />
            </IconButton>
          </ServerRow>
          <ServerRow>
            <ServerRowKey>Last Updated:</ServerRowKey>
            <CopyText value={props.server.server_updated_at}>
              {getDate(props.server.server_updated_at)}
            </CopyText>
          </ServerRow>
          <ServerRow>
            {/* invert value and use background filter */}
            <ServerRowKey>Disk:</ServerRowKey>
            <CopyText
              value={`Using ${props.server.server_disk_used_gb}Gb of ${props.server.server_disk_total_gb}Gb total | ${props.server.server_type}`}
              overflowVisible={true}
            >
              <ProgressBar
                progress={diskUsed}
                pulse={diskUsed >= 70}
                color={diskColor}
                height={`10px`}
                margin={`auto 0 4px`}
              />
            </CopyText>
          </ServerRow>
        </div>
        {store.showMoreInfo &&
          filteredAdvancedCardData.map((row) => {
            const advancedData = Object.entries(
              APP_CONFIG.CARD_ADVANCED_MAPPING,
            ).find((obj) => {
              return obj[0] === row[0];
            });

            if (!advancedData) {
              return null;
            }

            return (
              <ServerRow key={row[0]}>
                <ServerRowKey>{advancedData[1]}:</ServerRowKey>
                <CopyText value={row[1]}>{row[1]}</CopyText>
              </ServerRow>
            );
          })}
      </Server>
    </ServerWrapper>
  );
};

export default CardServer;
