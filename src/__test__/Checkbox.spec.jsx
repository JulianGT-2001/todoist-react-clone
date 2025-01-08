import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Checkbox } from '../components/Checkbox';

beforeEach(cleanup); // clean the DOM!

// Mock de Firebase Firestore
jest.mock("../firebase", () => ({
  db: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
  doc: jest.fn(),
  updateDoc: jest.fn(),
}));

describe('<Checkbox />', () => {
    describe('Success', () => {
        it('renders the task checkbox', () => {
            const { queryByTestId } = render(
                <Checkbox id="1" taskDesc="Finish this tutorial series!" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
        });

        it('renders the task checkbox and accepts a onClick', () => {
            const { queryByTestId } = render(
                <Checkbox id="1" taskDesc="Finish this tutorial series!" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
            fireEvent.click(queryByTestId('checkbox-action'));
        });

        it('renders the task checkbox and accepts a onKeyDown', () => {
            const { queryByTestId } = render(
                <Checkbox id="1" taskDesc="Finish this tutorial series!" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
            fireEvent.keyDown(queryByTestId('checkbox-action'));
        });
    });
})