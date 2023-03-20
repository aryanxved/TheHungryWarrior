import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, screen} from '@testing-library/react';
//import userEvent from "@testing-library/user-event";
//import App from './App';
import Landing from '../Landing'
import Info from '../Info'
import InfoEntertainment from '../InfoEntertainment'
import InfoHousing from '../InfoHousing'
import InfoRestaurant from '../InfoRestaurant'
import Review from '../Review'
import ReviewEntertainment from '../ReviewEntertainment'
import ReviewHousing from '../ReviewHousing'
import ReviewRestaurant from '../ReviewRestaurant'
import '@testing-library/jest-dom/extend-expect';


//----------Landing Page Testing----------------
test('Locates The Hungry Warrior Title', () => {
  render(<Landing />);
  const linkElement = screen.getByText(/The Hungry Warrior/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the Landing Page', () => {
  render(<Landing/>)
});

//----------Review Page Testing------------------
test('Locates Review Title', () => {
  render(<Review />);
  const linkElement = screen.getByText(/Write a Review!/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the Review Page', () => {
  render(<Review/>)
});


//----------ReviewEntertainment Page Testing------------------
test('Locates ReviewEntertainment Title', () => {
  render(<ReviewEntertainment />);
  const linkElement = screen.getByText(/Review Entertainment/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the ReviewEntertainment Page', () => {
  render(<ReviewEntertainment/>)
});


//----------ReviewHousing Page Testing------------------
test('Locates ReviewHousing Title', () => {
  render(<ReviewHousing />);
  const linkElement = screen.getByText(/Review A Place/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the ReviewHousing Page', () => {
  render(<ReviewHousing/>)
});


//----------ReviewRestaurant Page Testing------------------
test('Locates ReviewRestaurant Title', () => {
  render(<ReviewRestaurant />);
  const linkElement = screen.getByText(/Review A Restaurant/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the ReviewRestaurant Page', () => {
  render(<ReviewRestaurant/>)
});


//----------Info Page Testing------------------
test('Locates Info Title', () => {
  render(<Info />);
  const linkElement = screen.getByText(/Find Information!/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the Info Page', () => {
  render(<Info/>)
});


//----------InfoEntertainment Page Testing------------------
test('Locates InfoEntertainment Title', () => {
  render(<InfoEntertainment />);
  const linkElement = screen.getByText(/Information About Entertainment/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the InfoEntertainment Page', () => {
  render(<InfoEntertainment/>)
});


//----------InfoHousing Page Testing------------------
test('Locates InfoHousing Title', () => {
  render(<InfoHousing />);
  const linkElement = screen.getByText(/Information About Housing/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the InfoHousing Page', () => {
  render(<InfoHousing/>)
});


//----------InfoRestaurant Page Testing------------------
test('Locates InfoRestaurant Title', () => {
  render(<InfoRestaurant />);
  const linkElement = screen.getByText(/Information About Restaurant/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the InfoRestaurant Page', () => {
  render(<InfoRestaurant/>)
});


