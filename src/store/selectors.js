import { createSelector } from "@reduxjs/toolkit";

export const sectionSelector = (state) => state.section.isLoggedIn;
