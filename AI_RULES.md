# AI Development Rules

This document provides guidelines for the AI assistant to follow when developing and modifying this web application. The goal is to maintain code quality, consistency, and simplicity.

## 🚀 Tech Stack Overview

The application is built on a modern, robust tech stack. Key technologies include:

- **Framework**: Next.js 15 (App Router) for a full-stack React experience.
- **Language**: TypeScript for type safety and improved developer experience.
- **UI Components**: A comprehensive set of accessible components from **shadcn/ui**, built on Radix UI.
- **Styling**: **Tailwind CSS 4** for all utility-first styling.
- **State Management**: **Zustand** for simple, scalable global state and React hooks for local state.
- **Data Fetching**: **TanStack Query (React Query)** for server state management, paired with **Axios** for HTTP requests.
- **Forms**: **React Hook Form** for performant forms, with **Zod** for schema-based validation.
- **Icons**: **Lucide React** for a consistent and beautiful icon set.
- **Real-time**: **Socket.IO** for real-time communication between the client and server.
- **Animations**: **Framer Motion** for all UI animations and transitions.

## 📋 Library Usage Guidelines

To ensure consistency, please adhere to the following rules when implementing new features.

### UI & Styling

- **Component Library**: **ALWAYS** use components from `shadcn/ui` located in `src/components/ui`. Do not install new component libraries. If a required component does not exist, create a new, simple component in `src/components/` following the existing style.
- **Styling**: Use **Tailwind CSS** classes for all styling. Do not write custom CSS files. Use the `cn` utility from `src/lib/utils.ts` to conditionally apply classes.
- **Icons**: Exclusively use icons from the `lucide-react` package.
- **Layout**: Use `flexbox` and `grid` for layouts. All new pages and components must be responsive.

### State & Data

- **Local State**: Use React's built-in `useState` and `useReducer` hooks for state that is local to a single component.
- **Global State**: Use **Zustand** for managing complex state that is shared across multiple components.
- **Server State / API Calls**: Use **TanStack Query (`useQuery`, `useMutation`)** to manage data from the server. Use **Axios** as the HTTP client within your query functions.

### Forms

- **Form Management**: All forms **MUST** be built using **React Hook Form**.
- **Validation**: All form validation **MUST** be handled using **Zod**. Create a Zod schema for each form's data structure.

### Navigation

- **Routing**: Use the Next.js App Router for all page-based routing. Use the `<Link>` component from `next/link` for client-side navigation.

### Notifications

- **Toasts**: Use the pre-configured `useToast` hook (`src/hooks/use-toast.ts`) for all user notifications (success, error, info). Do not install or use another toast library.

### Real-time Features

- **WebSockets**: For any real-time functionality, use the existing **Socket.IO** client and server setup (`src/lib/socket.ts`).

### File Structure

- **Pages**: Create new pages as directories within the `src/app/` directory (e.g., `src/app/new-page/page.tsx`).
- **Reusable Components**: Place all new reusable components in `src/components/`.
- **Custom Hooks**: Place all new custom hooks in `src/hooks/`.
- **Utilities**: Place all new utility functions in `src/lib/`.