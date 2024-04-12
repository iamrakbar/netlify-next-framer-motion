"use client"

import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";


// Prevents instant page opening
function FrozenRouter({ children }: { children: ReactNode }) {

    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {children}
        </LayoutRouterContext.Provider>
    );
}

export default function Template({ children }: { children: ReactNode }) {

    let pathname = usePathname();

    const dosomething = () => {
        console.log("onExit")
    }

    return (
        <>
            <AnimatePresence mode={'wait'} initial={false} onExitComplete={dosomething}>
                <motion.div
                    key={`${pathname}2`}
                    initial={{ bottom: '-100vh', scaleY: 1 }}
                    animate={{ bottom: '-100vh', scaleY: 1 }}
                    exit={{ bottom: 0, scaleY: 0 }}
                    transition={{
                        top: {
                            duration: 2,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0
                        },
                        scaleY: {
                            duration: 1,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.25 // Delay the start of the scaleY animation by 1 second
                        }
                    }}
                    style={{
                        transformOrigin: 'top',
                        zIndex: 999999,
                        left: 0,
                        position: 'fixed',
                        width: '100vw',
                        height: '100vh',
                        background: '#191539'
                    }}
                />
                <motion.div
                    key={pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                        opacity: 0
                    }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                    <FrozenRouter>{children}</FrozenRouter>
                </motion.div>
            </AnimatePresence>
        </>
    )
}