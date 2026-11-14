import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title: 'Atlas | Technology Leadership & Engineering', description: 'A personal portfolio about engineering leadership, cloud architecture and AI transformation.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}