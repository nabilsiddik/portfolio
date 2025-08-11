
const BottomFadeGrid = () => {
    return (
        <div className="min-h-screen w-full  absolute bottom-0 left-0">
            {/* Bottom Fade Grid Background */}
            <div
                className="absolute inset-25 z-0"
                style={{
                    backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
                    backgroundSize: "20px 30px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
                    maskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
                }}
            />
            {/* Your Content/Components */}
        </div>
    )
}

export default BottomFadeGrid
