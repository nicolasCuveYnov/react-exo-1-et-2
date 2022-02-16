import React from "react";
import {fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "../components/Card"
describe("Card component tests",()=>{
    it('renders card title `Your Number`',()=>{
        render(<Card/>)
        expect(screen.getByText("Your Number")).toBeInTheDocument()
    }),
    it('renders button `Show computers number`',()=>{
        render(<Card/>)
        expect(screen.getByRole("button",{ name: "Show computer's number"}))
    }),
    it('renders Modal with its title `Fight` after click on card button',()=>{
        render(<Card/>)
        fireEvent.click(screen.getByRole("button",{name : "Show computer's number"}))
        expect(screen.getByText("Fight")).toBeInTheDocument()
    })
})    