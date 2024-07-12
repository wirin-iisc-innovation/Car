// pages/dashboard.js
"use client";

import styled from 'styled-components';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { GroupButtonItem } from '../../components/GroupButtonItem';

const Container = styled.div`
  display: flex;
  height: 434px;
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


const QuickControlsSettingsPage = () => {


  return (
    <Container>
        <MainContent>
            <text>HIIIIIIIIIIIIII</text>
        </MainContent>
    </Container>
  );
};

export default QuickControlsSettingsPage;
  