import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";

const pillTabs = [
    { label: "Sobre Mí", value: "aboutMe" },
    { label: "Mis Proyectos", value: "projects" },
    { label: "Contáctame", value: "contact" }
];

export function PillTabs({ onTabClick }) {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    

    const tabsComponents = pillTabs.map((tab, i) => {
        
        return (
            <button
                key={tab.value}
                onMouseEnter={() => setHoveredIndex(i)}
                onClick={() => onTabClick(tab.value)}
                style={{
                    position: "relative",
                    padding: "0.65rem 0.75rem",
                    /* backgroundColor: "#00D1A0", */
                    backgroundColor: "#ffffff",
                    color: "#000000" , // Cambia el color del texto al pasar el cursor
                    border: 0,
                    borderRadius: "16px",
                    fontSize: "16px",
                }}
            >
                {hoveredIndex === i && (
                    <MagicTabSelect
                        id="pillTabs"
                        transition={{ type: "spring", bounce: 0.3 }}
                    >
                        <span
                            style={{
                                borderRadius: "10px",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 10,
                                /* backgroundColor: "#00D1A0", */
                                backgroundColor: "#ffffff",
                                mixBlendMode: "difference",
                                
                            }}
                        />
                    </MagicTabSelect>
                )}
                {tab.label}
            </button>
        );
    });

    return (
        <div style={{ display: "flex", gap: "5rem", margin: "0.75rem 0" }}>
            {tabsComponents}
        </div>
    );
}
