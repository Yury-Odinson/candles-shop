import {Header} from '@/components/shared';
import type {Metadata} from 'next';
import {Suspense} from 'react';

export const metadata: Metadata = {
    title: 'Next Pizza | Главная',
};

export default function HomeLayout({
                                       children,
                                       modal,
                                   }: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            <Suspense>
                <Header className="bg-gradient-to-b from-gray-200 to-white/80 bg-white"/>
            </Suspense>
            {children}
            {modal}
        </main>
    );
};
