# About This Shopping List Component

## What I Built

This project is a simple, interactive Shopping List built with React functional components and Hooks. It lets users search for items from a fixed list and toggle their selection, visually striking out chosen items.

## React Hooks Learned

- **useState**  
  I learned how to use the `useState` hook to track and update local component state, such as the search query and the selected items. Each user action updates state, causing the UI to update accordingly.

- **useMemo**  
  I used the `useMemo` hook to efficiently compute filtered results whenever the search query changes, preventing unnecessary recalculations and improving performance when dealing with potentially expensive operations[web:29][web:32].

- **useCallback**  
  I explored `useCallback` to ensure the function for toggling items maintains a stable reference across renders, avoiding unnecessary re-renders or side effects in dependent components[web:32][web:26].

