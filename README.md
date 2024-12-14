# Blobbos Adventure 🌟

Welcome to Blobbos Adventure, where the cutest memecoin meets Web3 gaming! This project showcases a modern, responsive landing page built with Next.js 15+, TypeScript, and Tailwind CSS.

## 🚀 Quick Start to use and customize a Nextjs 15 application in Typescript and TailwindCSS

1. Clone the repository:
```bash
git clone <your-repo-url>
cd blobbos-adventure
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app.

Customize as needed for your own either by creating a different component on components directory and importing it into page.tsx or editing the files. I would suggest you change the file names from BlobbosAdventure to whatever you would like according to your landing pages needs. For more help message me at machinelearner2334@gmail.com

## 🛠️ Build Your Own Landing Page

### Step 1: Create a New Next.js Project or clone existing repository

```bash
npx create-next-app@latest your-project-name --typescript --tailwind --eslint
cd your-project-name
```
or
```bash
git clone 

### Step 2: Project Structure

Create the following directory structure:

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   └── card.tsx
│   └── YourComponent.tsx
└── lib/
    └── utils.ts
```

### Step 3: Essential Dependencies

Install required packages:

```bash
npm install clsx tailwind-merge class-variance-authority lucide-react
```

### Step 4: Configure TypeScript

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Step 5: Component Development

1. Create utility functions (`src/lib/utils.ts`):
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

2. Create your main component (`src/components/YourComponent.tsx`):
```typescript
import React from 'react'

const YourComponent: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Your content here */}
    </div>
  )
}

export default YourComponent
```

3. Update page file (`src/app/page.tsx`):
```typescript
import YourComponent from "@/components/YourComponent"

export default function Home() {
  return <YourComponent />
}
```

## 🎨 Design Guidelines

- Use Tailwind CSS for styling
- Implement responsive design
- Add smooth animations
- Use gradient backgrounds
- Ensure accessibility
- Add hover effects

## 📱 Responsive Design

The landing page is responsive across all devices:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🧰 Technologies Used

- Next.js 15+
- TypeScript
- Tailwind CSS
- Clsx & Tailwind-merge for class management
- Lucide React for icons

## 💻 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🌟 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- The Web3 community for inspiration

---

Made with ❤️ by the Blobbos Adventure team