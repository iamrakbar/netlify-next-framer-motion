"use client"

import { allIslands } from "@/data/indonesia";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Maps() {
    const [currIndex, setCurrIndex] = useState(0)
    const [selectedTab, setSelectedTab] = useState(allIslands[currIndex]);

    useEffect(() => {
        setSelectedTab(allIslands[currIndex])
    }, [currIndex, setSelectedTab])


    const navigatePrev = () => {
        if (currIndex > 0) {
            const counter = currIndex - 1
            setCurrIndex(counter)
        }
    }
    const navigateNext = () => {
        if (currIndex < allIslands.length - 1) {
            const counter = currIndex + 1
            setCurrIndex(counter)
        }
    }

    return (
        <div className="relative flex flex-col gap-6 md:gap-8">
            <div className="flex justify-end gap-4">
                <button
                    onClick={navigatePrev}
                    className="flex items-center justify-center size-10 text-white bg-gray-500 rounded-full">
                    ←
                </button>
                <button
                    onClick={navigateNext}
                    className="flex items-center justify-center size-10 text-white bg-gray-500 rounded-full">
                    →
                </button>
            </div>
            <nav className="flex space-x-2 md:space-x-4">
                {
                    allIslands.map((island, index) => {
                        return (
                            <button key={island.label} onClick={() => setCurrIndex(index)} className="flex-1">
                                <div className={(selectedTab.label === island.label ? "bg-gray-700 text-white" : "text-gray-500") + " md:text-lg md:font-semibold py-1 px-2 md:py-2 md:px-4 rounded -xmmd:rounded-lg"}>
                                    <h3>{island.label}</h3>
                                </div>
                            </button>
                        )
                    })
                }
            </nav>
            <main className="relative flex w-full aspect-square items-center justify-center rounded-2xl overflow-hidden">
                <Image
                    src={'/maps/indonesia.svg'}
                    sizes="100vw"
                    alt="Indonesia"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={320}
                    height={320}
                    priority
                />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 backdrop-blur-sm"
                    >
                        <motion.div
                            transition={{ delay: 0.2 }}
                            className="absolute inset-0 bg-black/5" />
                        <Image
                            src={selectedTab.image}
                            sizes="100vw"
                            alt={selectedTab.label}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            width={320}
                            height={320}
                        />
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-4 left-4 right-4 h-auto p-4 md:p-8 bg-black/10 rounded-sm md:rounded-lg space-y-2 md:space-y-4"
                        >
                            <h3 className="font-semibold md:text-lg">{selectedTab.label}</h3>
                            <p>Area: {new Intl.NumberFormat("id-ID").format(selectedTab.area)} km<sup>2</sup></p>
                            <p>Population: {new Intl.NumberFormat("id-ID").format(selectedTab.population)}</p>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}