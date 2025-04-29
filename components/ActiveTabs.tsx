"use client";
import React, { Children, JSX, useRef, useState } from 'react';


interface TabProps {
    label : string;
    children : React.ReactNode;
}

interface AdvancedTabprops {
    children : React.ReactNode;
    activeTab? : number;
    defaultTab? : number;
    onChange? : (index : number) => void;
}

export function Tab({ label, children }: TabProps): JSX.Element {
    return <>{children}</>;
}

function ActiveTabs({children , activeTab : userSelectedActiveTab, onChange , defaultTab = 0 } : AdvancedTabprops) : JSX.Element {

    const [activeTab , setActiveTab] = useState<number>(defaultTab);
    const tabs = Children.toArray(children);
    // const buttonRefs = useRef(Array.from());




    const handleTabChange = (index : number) => {
        if(onChange) {
            onChange(index);
        }else {
            setActiveTab(index);
        }
    }

    
  return (
    <div className='w-full h-full flex flex-col gap-5'>
        <nav className="w-full relative  px-1 flex items-center space-x-2 overflow-x-auto scrollbar-hide py-1">
        {tabs.map((tab, index) => {
            if (React.isValidElement(tab)) {
            const isActive = activeTab === index;
            return (
                <button 
                key={index}
                // ref={(ele) => buttonRefs.current.}
                onClick={() => handleTabChange(index)}
                aria-selected={isActive}
                role="tab"
                className={`py-2  px-1 text-center  font-medium whitespace-nowrap  tracking-wider min-w-24 text-md flex-shrink-0 w-28 transition-all duration-300 relative ${
                    isActive 
                    ? 'text-white scale-105' 
                    : 'text-gray-500 hover:text-gray-200'
                }`}
                >
                {(tab.props as TabProps).label}
                </button>
            );
            }
            return null;
        })}
        
        {/* Animated indicator */}
        <div 
            style={{
                transform: `translateX(${activeTab * 119}px)`,
            }}
            className="absolute w-28 left-0  h-[80%] border-b-4 border-primary_green transition-all duration-300 ease-in-out"
            aria-hidden="true"
        />
        </nav>
        
        {tabs[activeTab]}
    </div>
  )
}

export default ActiveTabs