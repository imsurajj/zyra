# Zyra - Modern React Boilerplate

A comprehensive Next.js and React boilerplate with modern UI components, authentication, and development tools. Perfect for building scalable web applications faster and more efficiently.

## Features

- 🎨 **Modern UI Components** - Built with Radix UI and Tailwind CSS
- 🔐 **Authentication System** - Supabase integration for user management
- ⚙️ **Development Tools** - Built-in linting, formatting, and utilities
- 📱 **Responsive Design** - Mobile-first approach that works on all devices
- 🚀 **Next.js 15** - Latest features with App Router and Turbopack
- 🎯 **TypeScript** - Full type safety and better developer experience

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zyra.git
   cd zyra
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp env.example .env.local
   ```

4. Configure Supabase (optional):
   - Create a project at `https://supabase.com`
   - Go to Settings → API and copy:
     - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
     - anon public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Update your `.env.local` file

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn/ui)
│   └── ...             # Feature-specific components
├── contexts/            # React contexts
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
└── types/               # TypeScript type definitions
```

## Customization

- **UI Components**: Modify components in `src/components/ui/`
- **Styling**: Update Tailwind CSS classes and CSS variables
- **Authentication**: Customize Supabase auth flows in `src/lib/supabase/`
- **Theming**: Modify the theme context in `src/contexts/ThemeContext.tsx`

## Deployment

The easiest way to deploy your Zyra app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
