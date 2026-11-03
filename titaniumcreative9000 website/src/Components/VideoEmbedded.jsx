export default function Video({videoId, title = "Embedded Video"}){
    return(
    <div style={{ width: "100%", aspectRatio: "16 / 9" }}>
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
                width: "100%",
                height: "100%",
                border: 0,
                borderRadius: "8px",
                display: "block",
            }}
        />
    </div>
    )
}