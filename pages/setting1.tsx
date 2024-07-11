// pages/dashboard.js
"use client";

import styled from 'styled-components';
import { FaLightbulb, FaLock, FaCar, FaKey, FaCog } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import { MdDirectionsCar, MdSecurity, MdMiscellaneousServices } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #1c1c1c;
  color: #fff;
  padding: 20px;
`;

const MainContent = styled.div`
  flex: 1;
  background: #000;
  color: #fff;
  padding: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    background: #333;
  }

  svg {
    margin-right: 10px;
  }
`;

const ContentSection = styled.div`
  margin-bottom: 20px;
`;

const Slider = styled.input`
  width: 100%;
`;

const Button = styled.button`
  background: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

const Dashboard = () => {
  return (
    <Container>
      <Sidebar>
        <MenuItem><FaLightbulb /> Quick Controls</MenuItem>
        <MenuItem><FaLightbulb /> Lights</MenuItem>
        <MenuItem><FaLock /> Locks</MenuItem>
        <MenuItem><MdDirectionsCar /> Display</MenuItem>
        <MenuItem><FaCar /> Driving</MenuItem>
        <MenuItem><FaKey /> Autopilot</MenuItem>
        <MenuItem><MdSecurity /> Safety & Security</MenuItem>
        <MenuItem><MdMiscellaneousServices /> Service</MenuItem>
      </Sidebar>
      <MainContent>
        <ContentSection>
          <h3>Display Brightness</h3>
          <Slider type="range" min="0" max="100" />
        </ContentSection>
        <ContentSection>
          <h3>Exterior Lights</h3>
          <Button>off</Button>
          <Button>parking</Button>
          <Button>10%</Button>
          <Button>on</Button>
          <Button>auto</Button>
          <Button>front fog</Button>
        </ContentSection>
        <ContentSection>
          <h3>Adjustments</h3>
          <Button>MIRRORS</Button>
          <Button>STEERING WHEEL</Button>
          <Button>fold mirrors</Button>
        </ContentSection>
      </MainContent>
    </Container>
  );
};

export default Dashboard;
  