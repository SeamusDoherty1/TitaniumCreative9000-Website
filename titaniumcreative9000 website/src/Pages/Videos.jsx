import Video from '../Components/VideoEmbedded'

export default function Videos(){
    //Insert the Videos Embbedd link(The jumble after 'embed/' on youtube embed) and title after the videos title
    const videoList = [
        { id: "1", title: "Template Video 1", videoId: "-T9vPvbBRaw?si=WLWcYdiQOizXk1DV"},
        { id: "2", title: "Template Video 2", videoId: "LK8OI_1dOds?si=IE9SjicXN3pu0YUk"},
        { id: "3", title: "Template Video 3", videoId: "HOkQYYJsJig?si=gBXkgou5WlhufvN1"},
        { id: "4", title: "Template Video 4", videoId: "E8H9fehCEL4?si=ZB3L5PZJoWNAaUw-"}
    ];
    return(
        <>
        <div>
            <h1>This is the Videos Page</h1>
            <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
        >
        {videoList.map((item) => (
          <Video
            key={item.id}
            title={item.title}
            videoId={item.videoId}
          />
        ))}
        </div>
        </div>
        </>
    )
    
}