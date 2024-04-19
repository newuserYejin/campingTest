import React, { useState } from "react";
import "./Footer.style.css";
import logo from "../../../assets/whatAboutCampingLogo.png";
import { infoProject, infoMember } from "../../../constants/info";
import { useMemeberGithubInfoQuery } from "../../../hooks/useMemberGithubInfo";

import { Container, Tooltip, Avatar } from "@mui/material";

const Footer = () => {
  // 맴버 깃허브 정보 가져오기
  const { data: memberGithubData } = useMemeberGithubInfoQuery(infoMember);

  return (
    <footer className="footer">
      <Container maxWidth="xl">
        <div className="footer-top">
          <h2 className="footer-logo">
            <img src={logo} alt="" />
          </h2>
          <div className="footer-sns">
            {memberGithubData?.map((data, idx) => (
              <a
                className="footer-sns-item"
                key={idx}
                href={data?.html_url}
                target="_blank"
                rel="noreferrer">
                <Tooltip title={data?.name} arrow>
                  <Avatar alt={data?.login} src={data?.avatar_url} />
                </Tooltip>
              </a>
            ))}
          </div>
        </div>
        <address className="footer-info">
          <ul>
            {infoProject.map((item, idx) => (
              <li key={idx}>
                <span className="foooter-info-title">{item.title}: </span>
                {item.content}
              </li>
            ))}
            <p className="footer-info-copy">
              <span>Copyrights(c) 2024 캠핑어때 ALL RIGHTS RESERVED.</span>
            </p>
          </ul>
        </address>
      </Container>
    </footer>
  );
};

export default Footer;
