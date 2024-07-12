// pages/dashboard.js
"use client";

import styled from 'styled-components';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { GroupButtonItem } from '../../components/GroupButtonItem';

const Container = styled.div`
  display: flex;
  height: 522px;
  width: 1964px;
`;

const Sidebar = styled.div`
  width: 483px;
  height: 434px;
  background: #1c1c1c;
  color: #fff;
  padding: 20px;
`;

const MainContent = styled.div`
  flex: 1;
  background: #000;
  color: #fff;
  padding: 20px;
  flex-direction: row;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 10px 0;
  cursor: pointer;

  font-family: 'Urbanist';
  font-weight: 600;
  font-size: 25px;
  color: #737373;

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


const ButtonGroup = styled.div`
  width: 680px;
  height: 48px;
  background-color: #333;

  border-radius: 60px;
`;


const LightSettingsPage = () => {

  const eh_modes = [
    'off', 'parking', 'on', 'auto'
  ];

  const ih_modes = [
    'off', 'ambient', 'weather', 'music'
  ];


  const [ExteriorHeadlightModeState, setExteriorHeadlightModeState] = useState(3);
  const [InteriorHeadlightModeState, setInteriorHeadlightModeState] = useState(3);
  const [frontFogState, setFrontFogState] = useState(false);

  return (
    <Container>
      <MainContent>
        
        <ContentSection>
          <h3>Exterior Headlights</h3>
          <ButtonGroup>
            {
              eh_modes.map((value, index) => (
                <GroupButtonItem title={value} isActive={ExteriorHeadlightModeState === index} clickHandler={() => setExteriorHeadlightModeState(index)}/>
              ))
            }
          </ButtonGroup>
          <br/>
          <Button title='front fog' isActive={frontFogState} clickHandler={() => setFrontFogState(!frontFogState)}/>
        </ContentSection>
        <ContentSection>
          <h3>Interior Dome Lights</h3>
          <ButtonGroup> 
            {
              ih_modes.map((value, index) => (
                <GroupButtonItem title={value} isActive={InteriorHeadlightModeState === index} clickHandler={() => setInteriorHeadlightModeState(index)}/>
              ))
            }
          </ButtonGroup>
        </ContentSection>
      </MainContent>
    </Container>
  );
};

export default LightSettingsPage;
  