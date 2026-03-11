# Emoji Tracker

## Preview

![alt text](https://github.com/user-attachments/assets/21323f3d-d14f-4389-836d-947e7f787730)
![alt text](https://github.com/user-attachments/assets/bf66c3f0-d298-4323-9889-4e19c4f9cdeb)
![alt text](https://github.com/user-attachments/assets/26a8a2a4-bc53-445f-bcfa-a10e9ae9a704)

## Description

A modern Emoji Browser built with **React + TypeScript**, demonstrating:

- Strongly typed components with **interfaces and generics**
- API consumption with a dedicated **service layer** (`api.ts`)
- Separation of concerns with a **custom hook** (`useEmojis`)
- Search, filtering, pagination and favorites management
- Component testing with **Vitest + Testing Library**

This project is designed to showcase practical TypeScript skills in a real React application, readable and understandable by recruiters.

## Features

- **Search**: Filter emojis in real time by name
- **Group Filter**: Browse by category (smileys, animals, objects...)
- **Favorites**: Mark and display your favorite emojis
- **Pagination**: 24 emojis per page for better performance
- **Error Handling**: Friendly error message with a retry button

## Tech Stack

- **React 19** + **TypeScript 5**
- **Vite + SWC** for fast development builds
- Hooks: `useState`, `useEffect`, `useCallback`
- **Custom Hook** `useEmojis` for logic/UI separation
- **Vitest** + **Testing Library** for component tests
- **emoji-api.com** REST API

## Folder Structure

```
src/
├── components/
│   ├── EmojiCard.tsx
│   ├── EmojiList.tsx
│   ├── FilterBar.tsx
│   ├── Pagination.tsx
│   └── ErrorMessage.tsx
├── hooks/
│   └── useEmojis.ts
├── services/
│   └── api.ts
├── types/
│   └── emoji.ts
└── App.tsx
```

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/atteewf/react-emoji-tracker.git
```

2. Install dependencies:

```bash
npm install
```

3. Create your `.env` file:

```bash
cp .env.example .env
```

Add your API key from [emoji-api.com](https://emoji-api.com) inside `.env`:

```
VITE_EMOJI_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

## Tests

```bash
npm test
```

## Future Improvements

- Add search by emoji character directly
- Persist favorites in `localStorage`
- Deploy on Vercel with live demo link
- Add more component tests (FilterBar, Pagination)

## Author

**Atteewf** – React / TypeScript Developer — Portfolio Ready

## Contact

- LinkedIn: [seb-oll](https://www.linkedin.com/in/seb-oll-0188133a4/)
- Email: ateeew@gmail.com
